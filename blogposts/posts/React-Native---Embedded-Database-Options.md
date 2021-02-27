---
template: post
title: React Native — Embedded Database Options
date: 2020-01-07T21:06:51.128Z
excerpt: >-
  There are a few options in React Native for implementing persistent storage of
  data. During some recent mobile app builds project, I came…
thumb_img_path: images/React-Native---Embedded-Database-Options/1*54p9TQUJMvEfCRJ9Sgdgbw.jpeg
---
There are a few options in React Native for implementing persistent storage of data. During some recent mobile app builds project, I came across a number of potential solutions. I cover the trials and tribulations of the first two of these later on.

### High-level Solutions

**AsyncStorage** — A simple key-value based persistence option that provide simple storage and simple querying capability. You have to know which key you are looking for, unless you’re prepared to iterate. If you’re using Expo, use the expo-sqlite package, don’t use this one. The in-built React Native class has been deprecated as well in favour of a separate package. Coupling and modularity and all that.

[**react-native-community/async-storage**  
*An asynchronous, unencrypted, persistent, key-value storage system for React Native. Release Candidate for AsyncStorage…*github.com](https://github.com/react-native-community/async-storage "https://github.com/react-native-community/async-storage")[](https://github.com/react-native-community/async-storage)

**SQLite** — SQLite is an industry-standard embedded database solution that provides you with most of the capabilities of a relational database and SQL. It’s more than good enough for a persistence solution. The link that follows is for the Expo wrapper around SQLite, but you can also use react-native-sqlite-storage as well if you’re not using Expo.

[**Documentation**  
*expo-sqlite gives your app access to a database that can be queried through a WebSQL-like API. The database is…*docs.expo.io](https://docs.expo.io/versions/latest/sdk/sqlite/ "https://docs.expo.io/versions/latest/sdk/sqlite/")[](https://docs.expo.io/versions/latest/sdk/sqlite/)

**Realm** — Realm is the sophisticated embedded solution here that also provides an embedded database, but lots more on top including:

*   Synchronisation amongst multiple databases
*   Notifications of when data is changed;
*   Listeners for reacting to data changes.

This is great in the case whereby you need to implement a real-time solution around a data structure (think a shared shopping list or todo list).

[***Introducing Realm React Native***  
Introducing Realm React Nativerealm.io](https://realm.io/blog/introducing-realm-react-native/ "https://realm.io/blog/introducing-realm-react-native/")[](https://realm.io/blog/introducing-realm-react-native/)

I’m **not** going to cover Realm here. It’s super interesting, but at present most of my React Native projects are built on top of Expo, so I’m going to concentrate on the first two solutions with some examples. Hurrah.

BTW: There’s also PouchDB, WatermelonDB, Vasern and a variety of others.

![](/images/React-Native---Embedded-Database-Options/1*54p9TQUJMvEfCRJ9Sgdgbw.jpeg)

<figcaption>Thanks to <a href="https://www.freepik.com/zirconicusso" data-href="https://www.freepik.com/zirconicusso" class="markup--anchor markup--figure-anchor" rel="noopener" target="_blank">zirconicusso</a> and Freepik for the boomerang.</figcaption>

### AsyncStorage

AsyncStorage provides a simple key, value store for your application which is fine for basic persistence needs — e.g. user-specific configuration of your application.

It’s suitable for querying in O(1) access time. This suffices for things such as configuration data, but you can **also** use it for collections by means of arrays of objects. The down-side is that you have to retrieve your data into memory in order to query it further.

You can do batch-style storage and retrieval of data with multiSet and multiGet.

Expo provides an AsyncStorage solution out of the box which will either use RocksDB or SQLite under the hood as an engine. Because AsyncStorage operates globally, it’s suggested with Expo that you provide a wrapper around it. I’ve successfully used the following, which I’m happy to share with others, improvements, please let me know:

<script src="https://gist.github.com/jph98/9a1ba2ba148974949384f0c09f4a3199.js"></script>

<figcaption>AsyncStorageWrapper</figcaption>

A few things here:

*   **checkDataStore** provides a way to check whether your database has been created or not. This utilises the presence of a single root key to check whether you’ve initialised all your data or not. I’m sure there’s a much more elegant way of initialising your data. In my case, I’m storing static configuration data in the extra {} object in app.json and populating via the constructor here.
*   **setItem** and **getItemValue** are pretty self-explanatory. I also provide a simple **itemExists** function to check whether something is set or not.
*   **wipeStore** is provided simply because during development I wanted a quick and easy way to clear the data down for testing purposes. You can use Expo’s environment variable to check for dev-mode and only show a UI component that could call this if you didn’t want to show it in production.

It works just fine for me in several production mobile apps I have in Google Play and Apple’s appstore. However, it doesn’t allow me to do nice data querying with a tool such as SQL, so let’s look at a solution with SQLite…

![](/images/React-Native---Embedded-Database-Options/1*HYEctBGof1pQJwsP4r4H1w.jpeg)

### SQLite — A Relational Option

I first needed to use SQLite because I wanted to query a non-trivial (in mobile app terms) dataset in the tens of MB. I wanted the app to work offline, hence why I didn’t build some sort of Serverless solution on Lambda, Google Functions or something like back4app (which is toylike-simple-cool hosted Parse solution).

It’s a standard storage solution in native mobile applications. One thing to note here is that there are storage limitations an Android (6MB precisely), but you can get around this with configuration.

I’m going to cover Expo’s implementation here since I used it more recently for persistence in a new mobile project. I did run into issues with it and it’s worth checking the expo-sqlite package and the open issues out before you use it.

#### ExpoSqliteWrapper

ExpoSqliteWrapper is something I used in a few mobile app projects. Source code is here on Gist for you.

<script src="https://gist.github.com/jph98/6341234066798c6c61178c3cac6e4439.js"></script>

<figcaption>ExpoSqliteWrapper</figcaption>

It’s not a perfect solution, but it’s good enough. There are a few caveats I came across when building this out.

#### Shipping a Database Ahead of Time

In some cases, you want to ship a database ahead of time, rather than set it up when the application is first installed. This is particularly the case if you have lots of data that you need to insert that may take a minute or longer. If you want to ship a database you can create it ahead of time. I used a standalone dbutil class and the node sqlite3 package to create the relevant tables, process a set of JSON data and insert the data ahead of time. I then stored this in my assets folder.

If you do it this way you need to **ensure** that you specify to the Expo packager (via a metro.config.js file) that it should copy the database. Sample as follows:

    module.exports = {  
      resolver: {  
        assetExts: ["db", "png", "ttf"]  
      }  
    }

Otherwise, [it won’t be packaged](https://github.com/expo/expo-cli/issues/279) and will fail on startup to find your database.

#### Initialising your Database

I initialise my ExpoSqliteWrapper in App.js ahead of time. This constructs the class and calls the initialise function. This in-turn will:

*   Create the SQLite directory if it doesn’t exist;
*   Use FileSystem.downloadAsync(source, target) to copy the database from the assets folder into the local app SQLite directory;
*   Reload the app using Updates.reload() from Expo when completed.

The last step, I’ll admit is a hack, because you can’t close and re-open the SQLite database currently using the expo-sqlite package. I couldn’t find a way around this other than the workaround above and it caused problems with querying the database on specific devices. This was only on the physical device, not the simulator and only on iPads (weirdly). After lots of debugging the connection that was opened on first load appeared to have a blank database — no tables at all or data. Reloading the app fixed this (physically) so I ended up putting Updates.reload() in. I figure that displaying a message to the user with “Setting up Database” this is a reasonable solution.

I can’t stress this is a workaround until the underlying issues (where-ever that may lie) is fixed. Please let me know if you fix this another way.

#### Using ExpoSQLiteWrapper

There is an async method within the class that can be called from each of your React components when you need to work with the database.

    const db = await this.getDatabaseRef();

As part of this, we create a transaction for our query to run within, before using **executeSql** with an empty array of arguments (we need a random word from the table words in the following example), and the result set. Lastly, we call setState and use the first result to store the word and the meaning.

    async getRandomWord() {
     try {
     db.transaction(tx => {
     tx.executeSql('SELECT * FROM words ORDER BY RANDOM() LIMIT 1',  
                      [],   
                      (_, { rows }) => {
     this.setState({ word: rows['_array'][0].word });  
            this.setState({ meaning: rows['_array'][0].meaning });  
          });  
        });
     } catch (e) {  
        console.log(e);  
      }  
    }

Inserting data is fairly simple also. Again, wrap in a transaction and use **executeSql** to insert data.

    db.transaction(tx => {  
      tx.executeSql('INSERT INTO starred_words (word, meaning)              
                    VALUES(?,?)', [word, meanings]);
    });

### Conclusion

That’s it. Both wrappers above provide you with a way to get started with AsyncStorage or SQLite depending on your needs — I hope they’re useful. Again, they were used for apps that were built on-top of Expo. The app in question can be found here for improving your vocabulary:

[**jph98/loquacious**  
*Loquacious is an education tool for building your vocabulary for a variety of purposes including crossword knowledge…*github.com](https://github.com/jph98/loquacious "https://github.com/jph98/loquacious")[](https://github.com/jph98/loquacious)

I’ve recently started another project, which involves cloud-based storage on-top of SQLite in order to provide real-time updates. For that, I’m making use of back4app and real-time queries. Another option would have been for me to drop Expo altogether (sob) and rework it to use Realm as a solution. That, however, doesn’t come for free ($30 a month as of writing this):

[**Realm Pricing**  
*Choose the solution that's right for you.*realm.io](https://realm.io/pricing "https://realm.io/pricing")[](https://realm.io/pricing)

However, for more complex apps it looks like a decent solution.

I’m a consulting CTO working with HW Integral and several startups across London and Bristol. You can find out more about me here:

[**HW Integral**  
*Interim/Fractional CTO Services and Technology Consulting "We help growth stage startups with product and engineering…*www.hwintegral.com](https://www.hwintegral.com/ "https://www.hwintegral.com/")[](https://www.hwintegral.com/)

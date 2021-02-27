---
template: post
title: React Native and Migrating to Hooks
date: 2020-01-02T17:26:07.693Z
excerpt: >-
  I had a side project over the holiday break. I was building out a React Native
  mobile application for managing a set of (board/card) games…
thumb_img_path: images/React-Native-and-Migrating-to-Hooks/1*laoEdwxFYNS7UK4b0gVjzQ.jpeg
---
I had a side project over the holiday break. I was building out a React Native mobile application for managing a set of (board/card) games and a set of players and cumulative scoring over a period of time, possibly months.

As part of this, I had the opportunity to migrate from using the old approach of using setState to React Hooks which was introduced in React 16.8.

[**React v16.8: The One With Hooks - React Blog**  
*With React 16.8, React Hooks are available in a stable release! What Are Hooks? Hooks let you use state and other React…*reactjs.org](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html "https://reactjs.org/blog/2019/02/06/react-v16.8.0.html")[](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)

So…what are hooks?

Hooks are a fundamentally different way of doing state management in your applications. You have a set of predefined functions you can use “out of the box” and you can use your own “hooks”. They help to simplify your state management in a move away from the class component model. I’m going to cover the following here:

*   Functional components have to be used for hooks;
*   Utilising useEffect to setup your component on first render;
*   Variable manipulation and definition with useState;
*   Working with arrays, including the async gotcha;
*   Setting properties within objects of arrays.

![](/images/React-Native-and-Migrating-to-Hooks/1*laoEdwxFYNS7UK4b0gVjzQ.jpeg)

<figcaption>Cups courtesy of Freepik and jannoon028.</figcaption>

#### React Hooks — Functional Components Only!

React Hooks **only** **work with functional components**, so for myself using class components in my React Native applications, this was a bit fo a change.

What worried me initially was the complication of using React Navigation across the application, but switching out class components for functional components was pretty easy in the end. You declare a functional component as follows:

    export default function ExampleComponent() {}

Then each of your functions need to be declared as follows:

    doSomething = () => {}

You no longer have access to a constructor(), the lifecycle methods such as componentDidMount() etc… so you do need to map things over to the corresponding hooks. We’ll look at the useEffect hook as a replacement for setting up your component shortly

#### React Navigation — Navigation Properties

First, make sure you’re setting navigationOptions in your stack navigator (rather than in the class component itself).

    PointsManagement: {  
      screen: PointsManagement,  
        navigationOptions: {  
          header: null  
        }  
    }

You can access these from your new functional components by accessing the props object as part of the function declaration:

    export default function ExampleComponent(props) {}

#### Utilise useEffect to setup your component on first render

The useEffect hook is a good way to setup your component, set initial data, perform API calls etc…

However, if you utilise useEffect as follows you’ll get a surprise, because it will execute endlessly:

    useEffect(() => {  
    });

If you just want it to execute on the initial render, you’ll need to include an empty array at the end.

    useEffect(() => {  
    }, []);

This array is normally used to specify the dependent conditions under which useEffect will fire. For example, when a variable changes and you need to execute a side-effect.

#### Simple Primitives

We initialise our variable as follows using the **useState hook** and an initial value**.** The array of items here indicate the variable name and then the setter for the function.

    export default function PointsManagement(props) {
     const [increment, setIncrement] = useState(1);  
    ...

This now means you no longer need to do.

    setState({increment: 5});

You can use the setter function instead, which is much cleaner, and avoids some complications with nested objects and arrays (we’ll see shortly). For the simple property above we can just do:

    setIncrement(5);

If you wanted to increment based on a previous value you can do that by combining the variable name and the function:

    setIncrement(increment + 1);

There’s a great article here detailing building a simple counter by [John Muskett](https://medium.com/u/1c4fc8b23b50).

[**Making a simple counter with the useState hook**  
*Hooks are an upcoming feature (currently in alpha) that are set to offer a brand new way of creating React components…*medium.com](https://medium.com/@johnmuskett/making-a-simple-counter-with-the-usestate-hook-d232a03fcace "https://medium.com/@johnmuskett/making-a-simple-counter-with-the-usestate-hook-d232a03fcace")[](https://medium.com/@johnmuskett/making-a-simple-counter-with-the-usestate-hook-d232a03fcace)

#### Working with Arrays

Declare your array with:

    const [players, setPlayers] = useState([]);

Initialise your array within the useEffect hook — loading the list of players via API or local database.

Then, if you need to add a new object (in my case player) to the array then you can use the spread operator and add your new player as follows:

    const newPlayer { name: 'Gary Goodspeed', score: 0, turn: false};  
    setPlayers([...players, newPlayer]);

**However!**

Bear in mind this is asynchronous, not synchronous. That means if you’re setting state and then doing something like persisting to a database things aren’t going to work as you would expect. There are a few options:

*   Reverse the order of your operations (in my case doing the await/async database storage first, then calling setPlayers();
*   Utilise useEffect (although personally I think that looks messy);
*   Make use of another hook that allows you to utilise a callback instead — [https://www.npmjs.com/package/use-state-with-callback](https://www.npmjs.com/package/use-state-with-callback)

#### Setting properties within objects of arrays

This was much easier than I thought, again using the spread operator, but this time to copy the array of objects to make the modification. Steps are as follows:

*   Pass the index of the object you’re modifying to a function;
*   Make a copy of the array;
*   Access the object by index and modify the internal property (in my case the players score to decrement it by one);
*   Call the setter method to update the array.

    decScore = (playerIndex) => {  
      let newPlayers = [...players];  
      newPlayers[playerIndex].score -= parseInt(increment);  
      setPlayers(newPlayers);  
    }

#### TextInput and Handling Changes

I’d love to hear from people if they have a more elegant way of solving this problem. I ended up using a number of TextInput components in a recent app — definition of a standard one follows:

    <TextInput style={styles.inputFieldText}  
               autoCorrect={false}  
               autoCompleteType="off"  
               autoCapitalize="none"  
               placeholderTextColor={cs.WHITE}  
               onChange={(text) => { storeName(text, itemIndex); }}  
               value={item.name}  
               clearButtonMode='unless-editing'/>

My solution (others have done this as well) was to use the onChange event (which will fire on every character entered) to update the name. Store name looks something like this:

    const value = e.nativeEvent.text;  
    const newItems = [...items];  
    newItems[index].name = value;  
    setItems(newItems);

So, it seems a little bit of an overkill dealing with the spread of the existing array and the replacement of the object you’re editing (with the new name), but this works fairly nicely. I couldn’t really rely on onSubmitEditing (because there was no form or button). onBlur would be another option here also. However, I later had to change this so that it persisted the item in a local SQLite database (and then sync changes to an API). That makes the whole solution unusable in it’s current form. Fortunately, there is a solution provided by Gabe Ragland here which makes use of a debounce hook to trigger an expensive action:

[**Debouncing with React Hooks**  
*Today I'm going to show you how to build a useDebounce React Hook that makes it super easy to debounce API calls to…*dev.to](https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci "https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci")[](https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci)

That works by executing the expensive action utilising useEffect and setInterval behind the scenes.

#### Going Further

I haven’t covered creating your own hooks (or done this myself so far), but if you are interested in that then take a look at the source code for useStateWithCallback here:

[**the-road-to-learn-react/use-state-with-callback**  
*You can't perform that action at this time. You signed in with another tab or window. You signed out in another tab or…*github.com](https://github.com/the-road-to-learn-react/use-state-with-callback/blob/master/src/index.js "https://github.com/the-road-to-learn-react/use-state-with-callback/blob/master/src/index.js")[](https://github.com/the-road-to-learn-react/use-state-with-callback/blob/master/src/index.js)

However, this should get you started and provide you with the basics to migrate from class components and setState to functional components and hooks in your React Native application. Any feedback, welcome!

Am I sold on hooks and functional components? Not completely, but it definitely does clean things up in React Native applications.

I’m a consulting CTO (interim/fractional) working between London and Bristol. You can find more here:

[**HW Integral**  
*Interim/Fractional CTO Services and Technology Consulting "We help growth stage startups with product and engineering…*www.hwintegral.com](https://www.hwintegral.com/ "https://www.hwintegral.com/")[](https://www.hwintegral.com/)

---
template: post
title: Data Engineering – Pandas 101
date: 2019-11-07T10:42:24.463Z
excerpt: >-
  Pandas is a great tool for data analysis and engineering. I’ve been using it
  for about three years — prior to that, it was a mish-mash of…
thumb_img_path: images/Data-Engineering---Pandas-101/1*as7oG_yokro-bJswXkcdsQ.jpeg
---
Pandas is a great tool for data analysis and engineering. I’ve been using it for about three years — prior to that, it was a mish-mash of Python libraries and a bit yucky.

> Pandas = Python Data Analysis Library

![](/images/Data-Engineering---Pandas-101/1*as7oG_yokro-bJswXkcdsQ.jpeg)

So, what is Pandas and why is it great?

*   You can easily **load data remotely**, from local files or connect up to a database;
*   You can work in an **exploratory** manner with data, summarise and look at statistics for the data easily;
*   You can **clean**, **manipulate** (slice and dice), **reshape** and combine data to process it more easily down the chain;
*   You can handle **large datasets** more efficiently — reduce memory used when working with them, great non-beginner in-depth [article here](https://www.dataquest.io/blog/pandas-big-data/).
*   You have access to **data frames** — a table-like data structure (which we’ve had for a long time in the R language);
*   You can do rudimentary **plotting** of the resulting dataset — pretty stuff;

The official Pandas website is here:

[**Python Data Analysis Library - pandas: Python Data Analysis Library**  
*pandas is an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data…*pandas.pydata.org](https://pandas.pydata.org/ "https://pandas.pydata.org/")[](https://pandas.pydata.org/)

and installing the Pandas is dead simple:

    mkdir panda-playground  
    cd panda-playground  
    pip install pandas

We have access to a bunch of sample datasets also

#### Datasets

You can load datasets in Pandas in a number of different ways, via URL or local file:

    `iris = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')`

From a database like MySQL as follows:

    cn = `MySQLdb.connect(host='localhost', port=3306,user='un', passwd='pass', db='zoo')  
    pd.read_sql('select * from animals;', con=cn)`

The dataset we will use for the following examples relates to video game sales and can be found here:

    [https://github.com/jph98/pandas-playground/blob/master/vgsales-12-4-2019.csv](https://github.com/jph98/pandas-playground/blob/master/vgsales-12-4-2019.csv)

n.b. For creating the tables that follow I ended up taking the tabular output from Pandas and converting it into a CSV with:

    import pandas as pd  
    import numpy as na
    df = pd.read_csv('vgsales-12-4-2019.csv')  
    overview = df.describe()  
    print(overview.to_csv())

Then uploaded it as a Github gist before embedding it here. Works very nicely.

#### Summarising Data

Straight outta the box we can get look at some of the data to understand what we’re working with, top n set of results:

    `df.head()`<script src="https://gist.github.com/jph98/96fb3e3818b204e919bc529a98b63a17.js"></script>

<figcaption>Output of calling the head() function on the dataframe</figcaption>

n.b. You’ll notice when you do this, that the columns are truncated based on a setting in Pandas, to get around this restriction you can set display.max\_columns as follows:

    pd.set_option('display.max_columns', None)

Or get a useful summary of the data to understand what we’re working with:

    `  
    df.describe()`<script src="https://gist.github.com/jph98/e44f60ce13488b8c927f81c53cc80174.js"></script>

<figcaption>Summary statistics output from the describe() function</figcaption>

You can also obtain a random set of sample rows from the dataset with:

    `df.sample(n=100)`

or look at some specific properties of the data frame:

    # Get the number of rows  
    len(df.index)
    # Get column names, get number of columns  
    `df.columns   
    len(df.columns)`

Ok, let’s look at extracting some data. n.b. When you extract data with Pandas it will include an initial column number as a column as well as the selected data.

#### Subsetting Data (Observations and Variables)

You can extract a **specific game** or **range of games** with:

    df.loc[0]  
    df.loc[0:3]

Grab the **Name** and **Genre** columns of the first and second video games

    `df.loc[0:1,['Name']]`

or indeed extract an entire specific column, in this case, the game **Genre,** but only the unique values:

    df['Genre'].unique()![](/images/Data-Engineering---Pandas-101/1*Yq2DR93ZscKispNcwyjHiA.jpeg)

#### Using Expressions to Filter Data

We can also include expressions in our extraction so we can query the data with some more elegance and sophistication.

Let’s display all the video game ratings as calculated by vgchartz.com. In this case, I’m interested in all the awesome games that scored 9.2 or more:

    So, no surprises there, Super Mario Galaxy, Grand Theft Auto, Zelda, Metal Gear Solid and the truly excellent World of Goo (well done Kyle Gabler) all feature here in the results.

We can now order these in descending order using the following:

    df[df.Vgchartzscore > 9.2].sort_values(['Vgchartzscore'])

and restrict the number of results to the top five games with:

    df[df.Vgchartzscore > 9.2].sort_values(['Vgchartzscore']).head(5)

n.b. You can modify the data frame we’ve loaded into memory. However, this **does not** modify the underlying CSV file. If we wanted to save/persist the data to file we would have to explicitly write the data frame in memory out with:

    df.to_csv('outputfile.csv')

This will save the entire data frame. To restrict it to the subsetted data, just chain again with to\_csv:

    df[df.Vgchartzscore > 9.2].sort_values(['Vgchartzscore']).head(5).to_csv('outputfile.csv)

#### Handling Missing Data

One of the common things we come across in data-engineering is the need to modify incoming data by cleaning it up — after all we don’t want to ingest bad data and want to normalise things somewhat.

**Dropping Empty Columns or Rows  
**To drop empty rows (specify axis=0) or columns (specify axis=1) with the following:

    df.`dropna(axis=**0**, how='any', thresh=None, subset=None, inplace=False)`

You can drop specific columns with:

    df.drop(['Rank'], axis=1)

**Missing Values**   
Some of the row specific columns in the above dataset have a NaN (Not a Number) value. To get a count of the **rows** that have at least one column which is null we can use:

    df.isnull().sum().sum()

or breakdown by columns with:

    df.isnull().sum()

We have a few options here:

*   We can exclude the rows containing null columns
*   We can clean the rows up by normalising to known values

e.g. for the Vgchartzscore which is NaN, we can normalise these values to 0.0 with the following:

    df['Vgchartzscore'].fillna(0, inplace=True)

That should then leave around 799 rows with non 0.0 values.

![](/images/Data-Engineering---Pandas-101/1*KL64Ru2PE9BwftPQ59BtNQ.jpeg)

#### Grouping Data

There are a number of ways of reshaping data in Pandas that can be useful. Let’s take a look at the groupby function. We can use this with the video games dataset by Genre to understand the number of video games that fit into that category with:

    df.groupby('Genre').first()

We can get the number of games in each group Genre with the following:

    df.groupby('Genre').size()

We can also then apply a sum(), or indeed another supported function, as follows:

    df.groupby('Genre').first().sum()

Ok, next up we want a breakdown of the Genre’s by platform (PS4, XBox etc..) to understand the games, so:

    df.groupby(['Genre', 'Platform']).first()

n.b. If you then want to iterate through each of the Groups, to do some post-processing you can do the following:

    by_genre = df.groupby(['Genre', 'Platform'])  
    for name, group in by_genre:  
        print(name)

Finally, we can make use of the aggregate functions to do some calculations on the data we’ve grouped. In the following, we’re looking at the mean and sum of Global\_Sales in each Genre Platform:

    g = df.groupby(['Genre', 'Platform'])  
    res = g['Global_Sales'].agg(["mean", "sum"])

#### Conclusion

So, Pandas provides you with a wealth of functionality to help with data analysis and manipulation. You wouldn’t want to do this in SQL or in raw Python, mainly because it’s more complicated, you have to write more code or you’re limited by the functionality provided. Aggregation and grouping are two key scenarios where I opt for Pandas.

You can find Python 3 examples of the code mentioned in this article in the example Github repository here:

[**jph98/pandas-playground**  
*Pandas Playground repository for my medium article - jph98/pandas-playground*github.com](https://github.com/jph98/pandas-playground/ "https://github.com/jph98/pandas-playground/")[](https://github.com/jph98/pandas-playground/)

This is the first in a series of posts on data engineering, I’m going to cover the following in subsequent posts (and link from here when written):

*   Visualisation of Pandas data frames with matplotlib
*   Large data processing with Pandas using elements of AWS — SQS for coordination and then building pipelines for processing etc…

Shameless plug : )

*   I run coaching sessions around Python and Pandas via hwintegral;
*   I provide data team coaching, data-architecture review and transformation (both teams and technology).

Use the following to get in contact if you need some help at your company:

[**Services - HW Integral**  
*Due Diligence and Technical Audits At HW Integral, we provide due-diligence services to VC and PE firms for investment…*www.hwintegral.com](https://www.hwintegral.com/services "https://www.hwintegral.com/services")[](https://www.hwintegral.com/services)

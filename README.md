# NYT-React

#### A React-based rendition of the New York Times Article Search application. The app utilizes Node, Express and MongoDB so that users can save articles to read later.

##Program Information

###Main.js - Parent
![](screenshot/1.png)

####Passes to components (CHILDREN)...

####**Component 1: Form -> setTerm function** 
![](screenshot/2.png)
![](screenshot/5.png)

####**Component 2: Results -> var address** 
![](screenshot/3.png)

####**Component 3: History -> var history** 
![](screenshot/4.png)

###Component 1: Form.js

User inputs a location.

![](screenshot/6.png)

Takes the input value and sets it to **this.state.term**
Then runs **handleChange** which sets the state to the inputted term.
![](screenshot/8.png)
![](screenshot/10.png)

Runs handleSubmit function.
![](screenshot/7.png)

Takes the **setTerm function** from PARENT and passes it **this.state.term** from the CHILD
![](screenshot/9.png)

Main.js **searchTerm** is now the inputted term.
![](screenshot/1.png)

###Parent: Main.js 
runs **componentDidUpdate**
runs **helpers.runQuery**
![](screenshot/11.png)
Searches for articles in **Helpers.js**
returns **_data_** to **Main.js**
Main.js saves search results into **this.setState** **_results_**
![](screenshot/12.png)

**Main.js** runs postHistory
![](screenshot/13.png)
Which uses **helpers.js** to post 
![](screenshot/14.png)

###Helpers.js
###Results.js

#####**File Structure**
```
NYT-React
|
+ -- app
|   | -- app.js
|   |
|   + -- components
|   |   + -- Children
|   |   |   | -- saved.js
|   |   |   | -- search.js
|   |   |
|   |   | -- Main.js
|   |
|   + -- config 
|       | -- routes.js
|
+ -- models
|   | -- schema.js
|   
| -- server.js
+ -- views
|   | -- 
|
|
|
```

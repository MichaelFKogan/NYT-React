// DEPENDENCIES
//===========================================================================
// Inclue the React library
var React = require("react");
// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
    var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
    var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
    var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
    var IndexRoute = router.IndexRoute;




// CHILD COMPONENTS
//===========================================================================
// Reference the high-level components
var Main = require("../components/Main");
var Form = require("../components/children/Form");
// var History = require("../components/children/History");
// var Results = require("../components/children/Results");






// ROUTES
//===========================================================================
// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
            <IndexRoute component={Main} />

          {/* If user selects Form then show the appropriate component*/}
          <Route path="Form" component={Form} />

          {/*</Route>  END CHILD1 ROUTE */}

        
            {/* If user selects Child2 then show the appropriate component*/}
            <Route path="History" component={History} />
            {/* If user selects any other path... we get the Home Route */}
      
      </Route> 
  </Router>
  ); 
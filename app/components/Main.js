// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({




//getInitialState
//============================================================

  getInitialState: function() {
    return { searchTerm: "", results: [], history: "" };
  },

  


//componentDidMount
//============================================================
  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    // helpers.getHistory().then(function(response) {
    //   console.log(response);

    //   if (response !== this.state.results) {
    //     console.log("History", response);
    //     this.setState({ history: response });
    //   }
    // }.bind(this));
  },

  



//componentDidUpdate
//============================================================
// If the component changes (i.e. if a search is entered)...
componentDidUpdate: function() {


helpers.runQuery(this.state.searchTerm)
  .then(function(data) {
  if (data !== this.state.results) {

  this.setState({ results: data});
  this.setState({history: this.state.searchTerm})

      
  // After we've received the result... then post the search term to our history.
helpers.postHistory(this.state.searchTerm).then(function(data) {

    // this.setState({history: data});
    // console.log("Updated!");


  // After we've done the post... then get the updated history
helpers.getHistory(this.state.searchTerm).then(function(response) {
  // console.log("Current History", response);
  // console.log("History", response);
  // this.setState({ history: response });




          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },
  




//setTerm
//============================================================
  // This function allows childrens to update the parent.

  
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },
  


//render
//============================================================
  // Here we render the function
  render: function() {
    return (
      
<div className="container">
        
        
        <div className="row">
          
                <div className="jumbotron">
                  
                  <h2 className="text-center">Address Finder!</h2>
                    
                    <p className="text-center">
                      <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").
                      </em>
                    </p>

                </div>

                <div className="col-md-6">
<Form setTerm={this.setTerm} />

                </div>

                <div className="col-md-6">
<Results address={this.state.results} />
                
                </div>

        </div>


        
        <div className="row">
<History history={this.state.history} />
        
        </div>

</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
































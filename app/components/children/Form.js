// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({



//getInitialState
//============================================================

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "" };
  },

//handleChange
//============================================================

  // This function will respond to the user input
  handleChange: function(event) {
    this.setState({ term: event.target.value });
  },


//handleSubmit
//============================================================
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },



//render
//============================================================
  // Here we describe this component's render method
  render: function() {
    return (
      
      <div className="panel panel-default">
          

          <div className="panel-heading">
            <h3 className="panel-title text-center">Query</h3>
          </div>
        

      <div className="panel-body text-center">
          
<form onSubmit={this.handleSubmit}>
            
          <div className="form-group">
              
              <h4 className="">
                <strong>Search</strong>
              </h4>


        {/* Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient. Also note how each has an onChange event associated with our handleChange event. */}
              

<input value={this.state.term} 
type="text" 
className="form-control text-center" 
id="term" 
onChange={this.handleChange} 
required />
              
              <br />


              <button className="btn btn-primary" type="submit"> Submit </button>
            
      </div>
          
      </form>
      
      </div>
      
      </div>


    );
  }
});

// Export the component back for use in other files
module.exports = Form;















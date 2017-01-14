// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>

<div className="panel-body" id="resultsBody">

  {this.props.address.map(function(search, i) {
    return (
    
    <div key={i}>
        <div className="article row">
          <div className="col-md-10 articleText text-left">
            <p><h4><strong>Title: </strong>{search.headline.main}</h4></p>
            <p><h4><strong>Date: </strong>{search.pub_date}</h4></p>
            <p><h4><strong>URL: </strong><a target="blank" href={search.web_url}>{search.web_url} </a></h4></p>
            <hr/>
          </div>
        </div>
    </div>
)})}
  
</div>
</div>

    );
  }
})

// Export the component back for use in other files
module.exports = Results;

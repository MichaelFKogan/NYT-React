// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to NYT.
runQuery: function(searchTerm) {

var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm +"&sort=newest&api-key=1097ee45ed2f4f6f9c66cba424892e20" 

return axios.get(queryURL).then(function(response) {

  // axios.post('/api', {data: response});

// for(var i=0;i<=10;i++){
//console.log(response.data.response.docs[i].headline.main);
//console.log(response.data.response.docs[i].web_url);
//console.log(response.data.response.docs[i].pub_date);
//       }
console.log(response);
      if (response.data.response.docs) {
        // console.log(response.data.response.docs)
        return response.data.response.docs;
      }
      // If we don't get any results, return an empty string
      return "";
  });
 
},




  // This function hits our own server to retrieve the record of query results
  getHistory: function(searchTerm) {
    // return axios.get("/api");
    return searchTerm;
  },






  // This function posts new searches to our database.
  postHistory: function(searchTerm) {
    // return axios.post("/searchTerm", { searchTerm: searchTerm });
    return searchTerm;
    console.log(searchTerm);
  }
};


// We export the API helper
module.exports = helper;





































var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
      url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
      headers: {
      'User-Agent': 'request'
      'Authorization': '0c283a8ed64a440291d7378539bb2f8638e8fb75'
    }
  };

  request(url, function(err, res, body) {
    cb(err, body);
  });
}
  getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
});

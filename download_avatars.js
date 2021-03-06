var request = require('request');
var bread = require('./secrets.js');
var fs = require('fs');
var repoOwner = process.argv[2];
var repoName = process.argv[3];

if (repoName === undefined || repoOwner === undefined){
  return console.log('You thought!');
}
console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
      url : "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
      headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + bread.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    // const data = JSON.parse(body);
    // var avatarURL = ' ';
    //   for (var i = 0; i < data.length; i++){
    //   avatarURL += data[i].avatar_url + "\n";
    // }
    cb(err, body);
  });
}

function downloadImageByURL(url, filePath) {
  request.get(url)               // Note 1
      .pipe(fs.createWriteStream(filePath))
}
  getRepoContributors("jquery", "jquery", function(err, result) {
    const data = JSON.parse(result);
      for (var i = 0; i < data.length; i++){
      console.log(data[i].avatar_url)
      console.log(data[i].login)
      downloadImageByURL(data[i].avatar_url, 'pictures/' + data[i].login);
    }
});


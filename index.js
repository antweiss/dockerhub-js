var pjson = require('./package.json');

var request = require('request');
var endpoint = "https://registry.hub.docker.com/v1/repositories/"
var options = {
    url: endpoint,
    headers: {
      "Accept": "application/json"
    }
};

var cb = function(){};
var images, tags;
var Step = require('step');

function process(error, response, body) {
    if (!error && response.statusCode == 200) {
      images = JSON.parse(body);
      cb(body);
    }
}

exports.images = function (repo, callback) {

  repo = String(repo);
  console.log(repo);
  cb = callback;
  img_ep = endpoint + repo + '/images'
  Step(
  request(img_ep, options, process),
  function apply(){
  return images;
  }
  );

}

exports.tags = function (repo, callback) {
  repo = String(repo);
  cb = callback;

  tags_ep =  endpoint + repo + '/tags'
  request(tags_ep, options, process);
}

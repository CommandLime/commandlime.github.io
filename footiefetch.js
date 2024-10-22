var apiKey = "13eb22e5c5cd4875973b27aa10b7f59d";
var myurl = "https://api.football-data.org/v4/competitions/PL/standings";

// var request = $.ajax({
//     url: myurl,
//     method: "GET",
//     headers: {
//         'X-Auth-Token': apiKey,
//     }});

// request.done(function (msg) {
//     $("#log").html(msg);
// });

 
// request.fail(function( jqXHR, textStatus ) {
//     alert( "Request failed: " + textStatus );
//   });

// console.log("you fucked it");
console.log("okay please fucking show up");
function fetchStatus(myurl) {
    var client = new XMLHttpRequest();
    client.setRequestHeader("x-Auth-Token", apiKey);
    client.onload = function() {
      // in case of network errors this might not give reliable results
      returnStatus(this.status);
    }
    client.open("HEAD", address);function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();

    client.send();
  }
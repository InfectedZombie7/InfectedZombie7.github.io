//
// listenin.js
// Made by Sam Scott (@AvinchMC / avinch.me)
//

// Requirements:
// A last.fm account with scrobbling set up
// Google Feeds JS API

// Licensed under Apache License 2.0
// More info: https://github.com/Avinch/listenin.js/blob/master/LICENSE



var url = "http://ws.audioscrobbler.com/1.0/user/infectedzombie7/recenttracks.rss"

google.load("feeds", "1");

    // Spotify/last.fm
    function initialize() {
      var feed = new google.feeds.Feed(url + (new Date).getTime());
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("listenin");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            container.innerHTML = "<a href='" + entry.link + "'>" + entry.title + "</a>";
            google.feeds.setNumEntries(1)
          }
        }
      });
    }

google.setOnLoadCallback(initialize);
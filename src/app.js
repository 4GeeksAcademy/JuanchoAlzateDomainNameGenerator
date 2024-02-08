/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "my", "your", "his", "her", "their", "its"];
  let adj = [
    "great",
    "big",
    "small",
    "amazing",
    "wonderful",
    "awesome",
    "fantastic",
    "beautiful"
  ];
  let noun = ["jogger", "racoon", "car", "house", "tree", "cat", "dog", "bird"];
  let extensions = [
    ".com",
    ".net",
    ".us",
    ".io",
    ".es",
    ".org",
    ".info",
    ".biz",
    ".co",
    ".tv"
  ];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domainName = pronoun[i] + adj[j] + noun[k] + ".com";

        console.log(domainName);
      }
    }
  }
};

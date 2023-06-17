/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["I", "You", "She", "her", "He", "us"];
  let adjs = ["enormous", "great", "silly", "fun", "fast"];
  let nouns = ["cat", "dog", "tiger", "lion", "peach", "apple"];
  let tlds = [".com", ".net", ".org", ".gov", "mil", ".edu"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log(`${pronoun}${adj}${noun}${tld}`);
        }
      }
    }
  }
};

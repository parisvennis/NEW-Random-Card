/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
import "breathecode-dom"; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let ranSuit = ["&#9824", "&#9829", "&#9827", "&#9830"];

  console.log(ranSuit[Math.floor(Math.random() * ranSuit.length + 1)]);
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let random1 = Math.floor(Math.random() * 4);
  let random2 = Math.floor(Math.random() * 3);
  let random3 = Math.floor(Math.random() * 5);

  console.log(
    who[random1] +
      " " +
      action[random1] +
      " " +
      what[random2] +
      " " +
      when[random3]
  );
  document.getElementById("excuseGenerator").innerHTML =
    who[random1] +
    " " +
    action[random1] +
    " " +
    what[random2] +
    " " +
    when[random3];
  //write your code here
  console.log("Hello Rigo from the console!");
};

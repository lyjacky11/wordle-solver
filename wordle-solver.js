// ==UserScript==
// @name         Wordle - Word Reveal
// @namespace    lyjacky11
// @version      2.0
// @description  Adds the daily word to the bottom of the page. Hover over it to reveal the solution.
// @author       lyjacky11
// @match        https://www.nytimes.com/games/wordle/*
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    var revealDiv = document.createElement("div");
	var styles = document.createElement("style");
    revealDiv.setAttribute("id","word-solution");
    styles.innerHTML="#word-solution{user-select:none;text-align:center;background:#818384;color:#818384;} #word-solution:hover{color:white;}";

    var game = document.querySelector("game-app").shadowRoot.querySelector("#game");
    game.appendChild(styles);
    game.appendChild(revealDiv);

	var dailyWord = JSON.parse(localStorage.getItem('nyt-wordle-state')).solution.toUpperCase();
    revealDiv.addEventListener('click',(e) => {
       // alert("Today's word is: " + dailyWord);
    });
    revealDiv.innerHTML = "Today's word is: " + dailyWord;
})();

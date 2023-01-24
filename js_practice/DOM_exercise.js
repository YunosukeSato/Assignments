/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
function highLight() {
  const txt = document.querySelector('p').innerText;
  let output = '';
  let words = txt.split(' ');
  let replacementword = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length >= 8) {
      replacementword = '<span>' + word + '</span>';
    } else {
      replacementword = word;
    }
    output = output + ' ' + replacementword + ' ';
  }
  document.querySelector('p').innerHTML = output;
}

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
function addLink() {
  let aTag = document.createElement('a');
  aTag.setAttribute('href', 'http://officeipsum.com/');
  let txt = document.createTextNode('http://officeipsum.com/');
  aTag.appendChild(txt);
  let pTag = document.querySelector('p');
  pTag.after(aTag);
}

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
function splitSentence() {
  // let txt = document.querySelector("p").innerText.split(".");
  // let sentence = "";
  // let replacementTxt = ""
  // for (let i = 0; i < txt.length; i++) {
  //   sentence = txt[i] + ".<br>";
  //   replacementTxt = replacementTxt + sentence;
  // }
  // document.querySelector("p").innerHTML = replacementTxt;
  let txt = document.querySelector('p').innerText;
  let replacedTxt = txt.replaceAll('.', '.<br>');
  document.querySelector('p').innerHTML = replacedTxt;
}

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
function countWords() {
  let words = document.querySelector("p").innerText.split(" ");
  let pTag = document.createElement("p");
  let txt = document.createTextNode("'words count : " + words.length + "'");
  pTag.appendChild(txt);
  let heading = document.querySelector("h1");
  heading.after(pTag);
}

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
function replaceToEmoji() {
  let txt = document.querySelector("p").innerText;
  let replaceQuestion = txt.replaceAll("?", "🤔");
  let replacedTxt = replaceQuestion.replaceAll("!", "😲");
  document.querySelector("p").innerHTML = replacedTxt;
}

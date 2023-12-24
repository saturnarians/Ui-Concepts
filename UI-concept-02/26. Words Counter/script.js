var letters = document.getElementById("letters");
var words = document.getElementById("words");
var characters = document.getElementById("characters");

textArea.addEventListener("input", () => {
  let textArea = document.getElementById("textArea").value;
  let textLength = textArea.replace(/\s/g, '').length;
  characters.innerHTML = "Characters: " + textArea.length;
  letters.innerHTML = "Letters: " + textLength;
  countWord(textArea);
});

function countWord(a) {
  let wordArray = a.split(" ");
  let wordCount = 0;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] != "") {
      wordCount++;
    }
  }
  words.innerHTML = "Words: " + wordCount;
}


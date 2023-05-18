let text = document.getElementById("paragraphOfText");
let submitBtn = document.getElementById("textToSpeechButton");
let audioMessage;

submitBtn.addEventListener("click", () => {

    //set the text
    audioMessage.text = text.value;
    //speak the text
    window.speechSynthesis.speak(audioMessage);
  });

  
  window.onload = () => {
    if ("speechSynthesis" in window) {
      audioMessage = new SpeechSynthesisUtterance();
    } else {
      alert("Speech Synthese is not supported");
    }
  };
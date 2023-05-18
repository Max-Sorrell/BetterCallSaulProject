let submitBtn = document.getElementById("textToSpeechButton");


submitBtn.addEventListener("click", () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Hello World";
    window.speechSynthesis.speak(msg);
  });

  
  window.onload = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Hello World";
    window.speechSynthesis.speak(msg);
  };
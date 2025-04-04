function revealGender() {   
    const resultText = document.getElementById("result");
    const isBoy = false;
    resultText.innerText = isBoy ? "У нас будет МАЛЬЧИК!" : "У нас будет ДЕВОЧКА!(вроде)";
    resultText.style.color = isBoy ? "#3f51b5" : "#dd82a4";
    resultText.style.display = "block";
  }m
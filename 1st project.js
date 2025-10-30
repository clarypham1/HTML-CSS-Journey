<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title> Date </title>
<style>
  body {
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    color: #fff;
    overflow: hidden;
  }

  h1 {
    font-size: 2.5rem;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.2);
    text-align: center;
    max-width: 90%;
  }

  .buttons {
    margin-top: 40px;
    display: flex;
    gap: 20px;
    position: relative;
  }

  button {
    padding: 15px 30px;
    border: none;
    border-radius: 12px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s;
  }

  #yes {
    background-color: #00c851;
    color: white;
  }

  #no {
    background-color: #ff4444;
    color: white;
    position: absolute;
  }

  #yes:hover {
    transform: scale(1.1);
  }

  #message {
    margin-top: 30px;
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    display: none;
    text-align: center;
  }

  #photo {
    margin-top: 25px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    display: none;
    box-shadow: 0 0 20px rgba(255,255,255,0.6);
  }

  .heart {
    position: fixed;
    font-size: 24px;
    color: #ff4d6d;
    animation: floatUp 4s ease-in infinite;
  }

  @keyframes floatUp {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-200px) scale(1.5);
    }
  }
</style>
</head>
<body>

<h1>Will you go out with me? 💞</h1>

<div class="buttons">
  <button id="yes">Yes 💘</button>
  <button id="no">No 💔</button>
</div>

<div id="message">Yay! I knew you'd say yes 😍</div>
<!-- Optional couple photo: replace with your own -->
<img id="photo" src="us.jpg" alt="Us ❤️">

<script>
  const noButton = document.getElementById("no");
  const yesButton = document.getElementById("yes");
  const message = document.getElementById("message");
  const photo = document.getElementById("photo");

  // Move the "No" button randomly
  noButton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  });

  yesButton.addEventListener("click", () => {
    message.style.display = "block";
    photo.style.display = "block";
    document.querySelector(".buttons").style.display = "none";
    createHearts();
  });

  // Floating hearts
  function createHearts() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "💖";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 4000);
    }, 200);
  }
</script>

</body>
</html>

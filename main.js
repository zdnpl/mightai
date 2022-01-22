var version = "Version 1.0 // latest update 21/01/2022";

const postBtn = document.querySelector(".postBtn");

const msg = document.getElementById("msg");

const inputCommand = document.getElementById("inputCommand");

postBtn.addEventListener("click", postMsg);

function postMsg() {
  const myDiv = document.createElement("div");
  const status = document.querySelector(".status");
  const aiName = document.querySelector(".aiName");
  const header = document.querySelector(".header");

  myDiv.classList.add("myMsg");
  myDiv.classList.add("float-end");
  myDiv.classList.add("text-end");

  status.style.opacity = "100%";
  aiName.style.position = "relative";
  aiName.style.marginTop = "10px";
  aiName.style.left = "0%";
  header.style.padding = "5px";

  if (document.getElementById("inputCommand").value == "") {
    inputCommand.style.border = "1px solid red";
    setTimeout(unborder, 500);
  } else {
    inputCommand.style.border = "none";
    msg.appendChild(myDiv);
    myDiv.innerHTML = document.getElementById("inputCommand").value;

    document.getElementById("inputCommand").disabled = true;
    inputCommand.style.color = "#757575";

    setTimeout(replyMsg, 1000);
  }
}

// audio manager
var NameAudio = document.getElementById("nameAudio");
var commandAudio = document.getElementById("commandAudio");
var instagramAudio = document.getElementById("instagramAudio");
var ageAudio = document.getElementById("ageAudio");
var developerAudio = document.getElementById("developerAudio");
var mousepadAudio = document.getElementById("mousepadAudio");
var versionAudio = document.getElementById("versionAudio");
var unknownAudio = document.getElementById("unknownAudio");

function unborder() {
  inputCommand.style.border = "none";
}

function replyMsg() {
  const botDiv = document.createElement("div");
  inputCommand.style.color = "#fff";

  botDiv.classList.add("botMsg");
  botDiv.classList.add("float-start");
  botDiv.classList.add("text-white");

  // command

  // ?command
  if (document.getElementById("inputCommand").value == "?command") {
    msg.appendChild(botDiv);
    botDiv.innerHTML = "MightAI " + "Command List" + "<br />" + "<br />" + "?name" + "<br />" + "?instagram" + "<br />" + "?age" + "<br />" + "?developer" + "<br />" + "?mousepad" + "<br />" + "?version";
    commandAudio.play();
  }
  // ?name
  else if (document.getElementById("inputCommand").value == "?name") {
    msg.appendChild(botDiv);
    botDiv.innerHTML = "Hello! im Might";
    NameAudio.play();
  }
  // ?instagram
  else if (document.getElementById("inputCommand").value == "?instagram") {
    msg.appendChild(botDiv);
    botDiv.innerHTML = "yo! follow my master's account @zidanaupal";
    instagramAudio.play();
  }
  // ?age
  else if (document.getElementById("inputCommand").value == "?age") {
    msg.appendChild(botDiv);
    botDiv.innerHTML = "i was born since 21/01/2022";
    ageAudio.play();
  }
  // ?developer
  else if (document.getElementById("inputCommand").value == "?developer") {
    msg.appendChild(botDiv);
    botDiv.innerHTML = "developed by zdnpl";
    developerAudio.play();
  }
  // ?mousepad
  else if (document.getElementById("inputCommand").value == "?mousepad") {
    msg.appendChild(botDiv);
    botDiv.innerHTML =
      "TOPOGRAPHY Series Gaming Mousepad Deskmat by Press Play - Coastal" +
      "<br />" +
      '<a href="https://www.tokopedia.com/pressplay/topography-series-gaming-mousepad-deskmat-by-press-play-infrared-40x90cm-4mm">https://www.tokopedia.com/pressplay/topography-series-gaming-mousepad-deskmat-by-press-play-infrared-40x90cm-4mm</a>';
    mousepadAudio.play();
  }
  // ?version
  else if (document.getElementById("inputCommand").value == "?version") {
    msg.appendChild(botDiv);
    botDiv.innerHTML = version;
    versionAudio.play();
  }
  // unknown command
  else {
    msg.appendChild(botDiv);
    botDiv.innerHTML = "Sorry, i dont understand";
    unknownAudio.play();
  }

  document.getElementById("inputCommand").disabled = false;
  document.getElementById("inputCommand").value = "";
}

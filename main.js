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

function unborder() {
  inputCommand.style.border = "none";
}

function replyMsg() {
  const botDiv = document.createElement("div");
  inputCommand.style.color = "#fff";

  botDiv.classList.add("botMsg");
  botDiv.classList.add("float-start");
  botDiv.classList.add("text-white");

  if (document.getElementById("inputCommand").value == "?command") {
    msg.appendChild(botDiv);
    botDiv.innerHTML = "MightAI " + "Command List" + "<br />" + "asasdasdasdas";
  } else {
    msg.appendChild(botDiv);
    botDiv.innerHTML = "Sorry i dont understand";
  }

  document.getElementById("inputCommand").disabled = false;
  document.getElementById("inputCommand").value = "";
}

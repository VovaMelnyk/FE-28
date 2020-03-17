const connection = new WebSocket("ws://localhost:8080");
const name = prompt("Enter your name");
connection.onopen = () => {
  console.log("connected");
  const status = document.querySelector("#status");
  console.log(status);
  status.classList.add("success");
  status.textContent = "connected";
};

connection.onclose = () => {
  console.error("disconnected");
  const status = document.querySelector("#status");
  status.classList.add("fail");
};

connection.onerror = error => {
  console.error("failed to connect", error);
};

connection.onmessage = event => {
  //   console.log(event);
  //   console.log("received", event.data);
  const result = JSON.parse(event.data);
  console.log(result);
  const li = document.createElement("li");
  const name = document.createElement("span");
  const text = document.createElement("span");
  name.textContent = result.name;
  text.textContent = result.message;
  li.append(name, text);
  document.querySelector("#chat").append(li);
};

document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  const message = document.querySelector("#message").value;
  connection.send(JSON.stringify({ name, message }));
  document.querySelector("#message").value = "";
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/main.css");
var signalR = require("@microsoft/signalr");
var divMessages = document.querySelector("#divMessages");
var tbMessage = document.querySelector("#tbMessage");
var btnSend = document.querySelector("#btnSend");
var username = new Date().getTime();
// HubConnectionBuilderクラスはサーバー接続構成の新しいビルダーを作成
// withUrl関数はハブURLを構成
var connection = new signalR.HubConnectionBuilder()
    .withUrl("/hub")
    .build();
connection.on("messageReceived", function (username, message) {
    var messages = document.createElement("div");
    messages.innerHTML =
        "<div class=\"message-author\">" + username + "</div><div>" + message + "</div>";
    divMessages.appendChild(messages);
    divMessages.scrollTop = divMessages.scrollHeight;
});
connection.start().catch(function (err) { return document.write(err); });
// ユーザーがtbMessageテキストボックスに入力するとkeyupイベントが発生
tbMessage.addEventListener("keyup", function (e) {
    // Enterキー押下でsend関数呼び出し
    if (e.key === "Enter") {
        send();
    }
});
btnSend.addEventListener("click", send);
function send() {
    connection.send("newMessage", username, tbMessage.value)
        .then(function () { return tbMessage.value = ""; });
}

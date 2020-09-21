import "./css/main.css";

const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");
const username = new Date().getTime();

// ユーザーがtbMessageテキストボックスに入力するとkeyupイベントが発生
tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
    // Enterキー押下でsend関数呼び出し
    if (e.key === "Enter") {
        send();
    }
});

btnSend.addEventListener("click", send);

function send() {
}
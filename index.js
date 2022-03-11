var submitChat = document.querySelector('.submit-chat');

submitChat.onclick = function() {
    var newChat = document.createElement("div"); 
    newChat.className = "chat-line";
    var chatBox = document.querySelector('.chat-box');
        newChat.textContent = Math.random(5);
    chatBox.prepend(newChat);
}
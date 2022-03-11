var submitChat = document.querySelector('.submit-chat');


submitChat.onclick = function() {
    var chatToSubmit = document.getElementById('chat-to-submit');
    var newChat = document.createElement("div"); 
    var chat = chatToSubmit.value;
    if (chat) {
        newChat.className = "chat-line";
        var chatBox = document.querySelector('.chat-box');
            newChat.textContent = chat;
        chatBox.prepend(newChat);
        chatToSubmit.value = "";
    }
}
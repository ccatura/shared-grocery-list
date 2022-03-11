var submitChat = document.querySelector('.submit-chat');
var chatToSubmit = document.getElementById('chat-to-submit');




function updateChat() {
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


submitChat.addEventListener('click', updateChat);
chatToSubmit.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        updateChat();
    }
});
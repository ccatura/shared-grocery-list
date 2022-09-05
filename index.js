// CHAT
var submitChat = document.querySelector('.submit-chat');
var chatToSubmit = document.getElementById('chat-to-submit');

function updateChat() {
    var newChat = document.createElement("div"); 
    var chat    = chatToSubmit.value;
    
    if (chat) {
        var chatBox = document.querySelector('.chat-box');

        newChat.className = "chat-line";

        newChat.innerHTML = "<strong>Charlie:</strong> " + chat;
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


// ADD ITEM BUTTON
var addItemButton = document.querySelector('#add-item-button');
var addItemInputbox = document.querySelector('.add-item-input-box');
var addItemCloseButton = document.querySelector('#add-item-close-button');

addItemButton.addEventListener('click', function() {
    addItemInputbox.style.display = "flex";
});

addItemCloseButton.addEventListener('click', function() {
    addItemInputbox.style.display = "none";
});
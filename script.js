const chatButton = document.querySelector('.chat-button');
const chatWindow = document.querySelector('.first-chat-window');
const buttonLogo = document.querySelector('.chat-button img');
const buttonClose = document.querySelector('.chat-button svg');
const startButton = document.querySelector('.chat-start-div button');
const chatDivOne = document.querySelector('.chat-div-one');
const chatDivTwo = document.querySelector('.chat-div-two');
const goBackButton = document.querySelector('.chat-div-two .chat-heading svg');

const submitButton = document.querySelector('.textarea-div button');
const textArea = document.querySelector('textarea');
const messageDiv = document.querySelector('.message-div');
const chatFormDiv = document.querySelector('.chat-form-div');

const showWindow = () => {
    chatWindow.classList.toggle('show');
    buttonLogo.classList.toggle('hide');
    buttonClose.classList.toggle('show');
    chatButton.classList.toggle('chat-button-small');
};

const showChat = () => {
    chatDivOne.classList.add('hide-opacity');
    chatDivTwo.classList.add('show');
}

const hideChat = () => {
    chatDivOne.classList.remove('hide-opacity');
    chatDivTwo.classList.remove('show');
}

const showResponse = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const html = `
        <div class="owner-message">
            <div class="profile-circle"></div>
            <p>${data.slip.advice}</p>
        </div>
    `;

    messageDiv.innerHTML += html;
    chatFormDiv.scrollTop = chatFormDiv.scrollHeight;

}

const showMessage = () => {

    if (textArea.value.trim()) {

        const html = `
            <div class="user-message">
                <p>${textArea.value.trim()}</p>
            </div>
        `;

        messageDiv.innerHTML += html;
        setTimeout(() => showResponse(), 2000);
        textArea.value = '';
        chatFormDiv.scrollTop = chatFormDiv.scrollHeight;
    }

}



chatButton.addEventListener('click', showWindow);
startButton.addEventListener('click', showChat)
submitButton.addEventListener('click', showMessage);
goBackButton.addEventListener('click', hideChat);
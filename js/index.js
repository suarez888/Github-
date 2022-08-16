
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('.footer');
let copyright = document.createElement('p')
copyright.innerHTML = "Emmely " + thisYear;
footer.appendChild(copyright);


var skills = ["HTML","CSS","JavaScript"];
var skillsSection = document.getElementById('mySkills');
var skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++ ){
    var skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

const messageForm = document.querySelector('form[name=leave_message]');
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.email.value;
    var message = event.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);
    var messageSection = document.querySelector('#messages');
    var messageList = messageSection.querySelector('ul');
    var newMessage = document.createElement('li');
        newMessage.innerHTML = '<a href="mailto:' + email + '"><span id="email"></span></a>'
    var removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener('click', (e) => {
        var entry = removeButton.parentNode;
        entry.parentElement.removeChild(entry);
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

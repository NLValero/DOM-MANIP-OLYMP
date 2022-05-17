const h1 = document.createElement("h1");

h1.innerHTML += '<h2>JavaScript Made This!!</h2>'
h1.innerHTML += '<span class="name">Nathan</span> wrote this JavaScript'
h1.className = 'h1'
document.getElementById("header").appendChild(h1);

//changing of the convo//

let left1 = document.getElementById("left1");
left1.textContent = "I would like to say something";

let right1 = document.getElementById("right1");
right1.textContent = "I would love to hear what you have to say";

let left2 = document.getElementById("left2");
left2.textContent = "HI";

let right2 = document.getElementById("right2");
right2.textContent = "!!!THATS ALL YOU HAD TO SAY!!!"

//clear button//

function clearText(){
    const chatText = document.querySelector("#messages");
    chatText.textContent = ""
}

//add text function//

//const form = document.getElementById('itemName')
//function addText() {
   // const newText = form.itemName.value
   // newText.itemName.value = ""
    //var newMessage = document.createElement('div')
   // newMessage.textContent = newText
    ///document.getElementById('messages').appendChild(newMessage)
//}


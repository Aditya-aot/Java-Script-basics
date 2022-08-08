
console.log('hello') ;

function sayhello() {
    alert('hello !!') ;
}

function saybyee() {
    alert('byee !!') ;
}

var hellobutton2 = document.getElementById('btn2')

hellobutton2.addEventListener('click', sayhello);
hellobutton2.addEventListener('click', saybyee);

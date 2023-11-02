let index = 1;
let heroId;
let prevHero;

let uName;
let uEmail;
let uQuestion;
let uComment;
let warning;

let cart = [];
let subTotal = 0;

function changeHero(){
    document.getElementById('hiddenImg').style.opacity = 0;
    heroId = 'hero' + index;
    document.getElementById(heroId).style.opacity = 0;
    if (index === 4){
        index = 1;
    }
    else {
        index++;
    }
    heroId = 'hero' + index;
    document.getElementById(heroId).style.opacity = 1;

}

if (window.location.pathname.includes('/index.html')){
    setInterval(changeHero, 3000);
}

function formSubmit(){
    warning = "";
    document.getElementById('warning').innerHTML = ""
    uName = document.getElementById('uName').value;
    uEmail = document.getElementById('uEmail').value;
    uQuestion = document.getElementById('uQuestion').value;
    uComment = document.getElementById('uComment').value;
    if(document.getElementById('uName').value === ''){
        warning += '[Please enter your name] ';
        document.getElementById('warning').innerHTML = warning;
    }

    if(document.getElementById('uEmail').value === '' || document.getElementById('uEmail').value.includes('@') === false || document.getElementById('uEmail').value.includes('.com') === false){
        warning += '[Please enter a valid email] ';
        document.getElementById('warning').innerHTML = warning;
    }

    if(document.getElementById('uQuestion').value === '' && document.getElementById('uComment').value === ''){
        warning += '[Please enter a question or comment] ';
        document.getElementById('warning').innerHTML = warning;
    }

    if(warning === ""){
        document.getElementById('warning').innerHTML = "";
        alert(`Successfully Submitted: Name: ${uName}, Email: ${uEmail}, Question: ${uQuestion}, Comment: ${uComment}`);
    }
}

function addToCart(item){
    cart.push(item);
    alert('Added to shopping cart.')
}

function showCart(){
    console.log('show '+ cart);
    let docCart = document.getElementById('cart');
    cart.forEach(item=>{
        newItem = document.createElement("div");
        newItem.innerHTML = ''

    })
}

if (window.location.pathname.includes('/cart.html')){
    showCart();
}
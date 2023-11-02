var index = 1;
var heroId;
var prevHero;

var uName;
var uEmail;
var uQuestion;
var uComment;
var warning;

var subTotal = 0;
var counter = 0;

function changeHero(){//change hero img
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

if (window.location.pathname.includes('/index.html')){ //if index.html is being viewed
    setInterval(changeHero, 3000); //perform changeHero every 3 secs
}

function formSubmit(){ //form validation
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

function addToCart(item, price){ //Adds items to cart
    console.log(item+' has been added to cart');
    alert('Added to shopping cart.');
    let docCart = document.getElementById('cart');
    let newItem = document.createElement('p');
    newItem.textContent = item + " : $" +price;
    console.log(newItem);
    docCart.appendChild(newItem);
    subTotal += price;
    document.getElementById('subTotal').textContent = 'Subtotal: $'+ subTotal;
}

function showCart(){ //shows or hides cart
    console.log('show')
    var cartEl = document.getElementById('cart');
    if(counter%2 === 0){
        document.getElementById('cart').style.zIndex ='1';
        counter++
    }
    else if(counter%2 === 1){
        document.getElementById('cart').style.zIndex =-'1';
        counter++
    }
}

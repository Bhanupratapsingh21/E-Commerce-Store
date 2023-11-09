const table = document.getElementById("table");
const table2 = document.getElementById("table2");
let slidebox = document.getElementById("slidebox")
for (let i = 0; i <= 8; i++) {
  const selector = document.getElementById(`innavbox${i}`);
  if (selector) {
    selector.addEventListener("mouseenter", () => {
      table.style.display = "block";
    });

    selector.addEventListener("mouseleave", () => {
      table.style.display = "none";
    });
  }
}


for (let i = 0; i <= 8; i++) {
  const selector2 = document.getElementById(`bg-manu-box${i}`);
  if (selector2) {
    selector2.addEventListener("mouseenter", () => {
      table2.style.display = "block";
      slidebox.style.display ="none";
    });

    selector2.addEventListener("mouseleave", () => {
      table2.style.display = "none";
      slidebox.style.display ="block";
    });
  }
}

table.addEventListener("mouseenter", () => {
  table.style.display = "block";
 
});

table.addEventListener("mouseleave", () => {
  table.style.display = "none";
 
});

table2.addEventListener("mouseenter", () => {
  table2.style.display = "block";
  slidebox.style.display ="none";
});

table2.addEventListener("mouseleave", () => {
  table2.style.display = "none";
  slidebox.style.display ="block";
});

const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function showControl(index) {
    controls.forEach((control, i) => {
        if (i === index) {
            control.classList.add('active');
        } else {
            control.classList.remove('active');
        }
    });
}

function changeSlide(index) {
    currentSlide = index;
    showSlide(index);
    showControl(index);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    showControl(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    showControl(currentSlide);
}

setInterval(nextSlide, 2000);
function redirectToHomepage() {
  window.location.href = 'index.html';
}
function redirectToaccount(){
  window.location.href ="login.html"
}
const clickableDivs = document.getElementsByClassName('innavbar');
for (const div of clickableDivs) {
  div.addEventListener('click', redirectToHomepage);
}

const manboxes = document.getElementsByClassName('manbox');

for (const manbox of manboxes) {
  manbox.addEventListener('click', redirectToaccount);
}


const logo = document.getElementById("icon2")
const img = document.getElementById('account');
const acc = document.getElementById('personimg');
const listitem = document.querySelectorAll('li');

listitem.forEach(item => {
  item.addEventListener('click', redirectToaccount);
});

const img2 = document.querySelectorAll('#occasionimg');

img2.forEach(item => {
  item.addEventListener('click', redirectToaccount);
});

const slideimg = document.querySelectorAll("#slideshow");

slideimg.forEach(item => {
  item.addEventListener('click', redirectToaccount);
});


const cart = document.querySelectorAll("#cartid");

cart.forEach(item => {
  item.addEventListener('click', redirectToaccount);
});


const logom = document.getElementById("mobiletopbox")
logom.addEventListener('click' , redirectToHomepage)

const imgproduct = document.querySelectorAll("#imgproduct");

imgproduct.forEach(item => {
  item.addEventListener('click', redirectToaccount);
});


/*local storage se cart ko update karne ke
 liye oske parent se total lege set
atteribut se data price or
osse update karege total mai or add 
karge local storage mai the jub woh
 osse mai hoga ek window function se
  osse refreash bhi karege*/


const textproduct = document.querySelectorAll("#productnameb");

textproduct.forEach(item => {
  item.addEventListener('click', redirectToaccount);
});
let carttotal = parseFloat(localStorage.getItem('carttotal')) || 0;



function updateCartTotal() {
    document.getElementById("carttotal").innerHTML = `₹${carttotal.toFixed(2)}`;
    document.getElementById("carttotal2").innerHTML = `₹${carttotal.toFixed(2)}`;
   
    localStorage.setItem('carttotal', carttotal.toFixed(2));
}

const addtocartDivs = document.querySelectorAll(".addtocart");

addtocartDivs.forEach(item => {
    item.addEventListener('click', addToCartHandler);
});

function addToCartHandler(event) {
    
    let priceElement = event.currentTarget.parentElement.querySelector("#price");
   
    let price = parseFloat(priceElement.getAttribute('data-price'));

    if (!isNaN(price)) {
        carttotal += price;

        
        updateCartTotal();
    }
}

window.addEventListener('load', updateCartTotal);

logo.addEventListener('click' , redirectToHomepage)
img.addEventListener('click', redirectToaccount);
acc.addEventListener('click', redirectToaccount);

/* start readmore from here*/

let pglink= document.getElementById("pgicon")
pglink.addEventListener('click', redirectToaccount)

let readmorebutton = document.getElementById("readmorebutton")
let readmorebox =document.getElementById("readmorebox")
readmorebutton.addEventListener('click' , readmore )
function readmore(){
  readmorebox.style.display = "block"
  readmorebutton.style.display ="none"
}
let readlessbutton = document.getElementById("readlessbutton")

readlessbutton.addEventListener('click' , readless )
function readless(){

  
  readmorebox.style.display = "none"
  readmorebutton.style.display ="block"
}

/* startavbar slide here */
let burgurbutton = document.getElementById("bgmenunav");
let slidebg = document.getElementById("slidebarbgmenu");

burgurbutton.addEventListener("click", toggleBurgerMenu);

function toggleBurgerMenu() {
  if (slidebg.style.display === "block") {
    slidebg.style.left = "-100%"; 
  } else {
    slidebg.style.display = "block";
    slidebg.style.left = "0"; 
  }
  
}

function closebg(event) {
  if (event.target !== burgurbutton && event.target !== slidebg) {
    slidebg.style.display = "none";
  }
}

window.addEventListener("click", closebg);
let num = 0;
let aNum = 0;
const btn = document.getElementById('myButton');
const dClick = document.getElementById('click2');
const tClick = document.getElementById('click3');
const aClick = document.getElementById('autoClick');
const fClick = document.getElementById('click5');
const gClick = document.getElementById('clickHundred');
const tenClick = document.getElementById('click10');
const thousandClick = document.getElementById('thousand');
const god = document.getElementById('god');
const tenK = document.getElementById('tenG');

// Set False
let gClicks = false;
let fClicks = false;
let dClicks = false;
let tClicks = false;
let aClicks = false;
let tenClicks = false;
let thousandClicks = false;
let tenKClicks = false;
let gods = false;

// Base Costs and Memes
let nice = "Nice!"
let autoCost = 100;
let dCost = 25;
let tCost = 50;
let fCost = 75;
let tenCost = 100;
let gCost = 500;
let thousandCost = 1000000;
let tenKCost = 3500000; 
let godCost = 10000000;

// Display $0 and base costs
document.getElementById('count').innerHTML = '$' + num;
document.getElementById('autoCost').innerHTML = 'Costs $' + autoCost.toLocaleString('en-US');
document.getElementById('dCost').innerHTML = 'Costs $' + dCost.toLocaleString('en-US');
document.getElementById('tCost').innerHTML = 'Costs $' + tCost.toLocaleString('en-US');
document.getElementById('fCost').innerHTML = 'Costs $' + fCost.toLocaleString('en-US');
document.getElementById('tenCost').innerHTML = 'Costs $' + tenCost.toLocaleString('en-US');
document.getElementById('gCost').innerHTML = 'Costs $' + gCost.toLocaleString('en-US');
document.getElementById('thousandCost').innerHTML = 'Costs $' + thousandCost.toLocaleString('en-US');
document.getElementById('tenKCost').innerHTML = 'Costs $' + tenKCost.toLocaleString('en-US');
document.getElementById('godCost').innerHTML = 'Costs $' + godCost.toLocaleString('en-US');

// Set the width of the side navigation to 250px 
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

// Set the width of the side navigation to 0 
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Regular Click
btn.addEventListener('click', (e) => {
  num = num + 1;
  document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
  //I'm such a memer
  if(num == 69){
    document.getElementById('count').innerHTML = nice;
  };
  
});

// Double Click
dClick.addEventListener('click', (e) => {

  if(num >= dCost){
    num = num - dCost;
    dCost = dCost + 25;
    document.getElementById('dCost').innerHTML = 'Costs $' + dCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    if (dClicks = true) {
      btn.addEventListener('click', (e) => {
        num = num + 2;
        document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
        tClicks = false;
        
      });
    };
  };
});

// Triple Click
tClick.addEventListener('click', (e) => {

  if(num >= tCost){
    num = num - tCost;
    tCost = tCost + 50;
    document.getElementById('tCost').innerHTML = 'Costs $' + tCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    if (tClicks = true) {
      btn.addEventListener('click', (e) => {
        num = num + 3;
        document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
        
      });
    };
  };
});

// Add 5 to Click
fClick.addEventListener('click', (e) => {

  if(num >= fCost){
    num = num - fCost;
    fCost = fCost + 75;
    document.getElementById('fCost').innerHTML = 'Costs $' + fCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    if (fClicks = true) {
      btn.addEventListener('click', (e) => {
        num = num + 5;
        document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
        
      });
    };
  };
});

// Add 10 to Click
tenClick.addEventListener('click', (e) => {

  if(num >= tenCost){
    num = num - tenCost;
    tenCost = tenCost + 100;
    document.getElementById('tenCost').innerHTML = 'Costs $' + tenCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    if (tenClicks = true) {
      btn.addEventListener('click', (e) => {
        num = num + 10;
        document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
        
      });
    };
  };
});

// Add 100 to Click
gClick.addEventListener('click', (e) => {

  if(num >= gCost){
    num = num - gCost;
    gCost = gCost + 500;
    document.getElementById('gCost').innerHTML = 'Costs $' + gCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    if (gClicks = true) {
      btn.addEventListener('click', (e) => {
        num = num + 100;
        document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
        
      });
    };
  };
});

// Add 1000 to Click
thousandClick.addEventListener('click', (e) => {

  if(num >= thousandCost){
    num = num - thousandCost;
    thousandCost = thousandCost + 100000;
    document.getElementById('thousandCost').innerHTML = 'Costs $' + thousandCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    if (thousandClicks = true) {
      btn.addEventListener('click', (e) => {
        num = num + 1000;
        document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
        
      });
    };
  };
});

// Add 10000 to Click
tenK.addEventListener('click', (e) => {

  if(num >= tenKCost){
    num = num - tenKCost;
    tenKCost = tenKCost + 500000;
    document.getElementById('tenKCost').innerHTML = 'Costs $' + tenKCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    if (tenKClicks = true) {
      btn.addEventListener('click', (e) => {
        num = num + 10000;
        document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
        
      });
    };
  };
});

// Auto Click
aClick.addEventListener('click', (e) => {
  if(num >= autoCost){
    num = num - autoCost;
    autoCost = autoCost + 100;
    document.getElementById('autoCost').innerHTML = 'Costs $' + autoCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    setInterval(function () {
      num = num % Number.MAX_VALUE + 1; // SET { 1-max js number }
      document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
      
    }, 1000);
  };
});

// Auto Click
god.addEventListener('click', (e) => {
  if(num >= godCost){
    num = num - godCost;
    godCost = godCost + 1000000;
    document.getElementById('godCost').innerHTML = 'Costs $' + godCost.toLocaleString('en-US');
    document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
    
    setInterval(function () {
      num = num % Number.MAX_VALUE + 200000; // SET { 1-max js number }
      document.getElementById('count').innerHTML = '$' + num.toLocaleString('en-US');
      
    }, 500);
  };
});
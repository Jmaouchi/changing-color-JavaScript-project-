const colors = ['red', 'blue', 'green', 'orange'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  //get a random Number between 0 to 3 the index
  const randomNumber = getRandomNumber(); 
  document.body.style.backgroundColor = colors [randomNumber];
  color.textContent = colors [randomNumber];
})

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length);
}



// chnage the colors with the hex 
const hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn  = document.getElementById('color-hex');
const colorTwo = document.querySelector('.color');

hexBtn.addEventListener('mouseover', function(e){
  let hexColor ='#';
  for(let i= 0; i<6; i++){
    hexColor+=hexArray[ getRandomNumberTwo()];
  }

  document.body.style.backgroundColor =hexColor;
  colorTwo.textContent = hexColor;

  e.preventDefault();
})

function getRandomNumberTwo(){
  return Math.floor(Math.random()*hexArray.length);
}
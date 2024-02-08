const LIMIT_X = 300;
const LIMIT_Y = 200;
window.addEventListener("load", ()=>{
  const btn = document.querySelector('.botonN');
  
  btn.addEventListener('click', ()=>{
    alert('Has hecho trampas');
  });
  btn.addEventListener('mouseover', moveButton);
  
  function moveButton(e){
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    let newX, newY;
    do {
      newX = Math.random() * LIMIT_X;
      newY = Math.random() * LIMIT_Y;
      
    } while(isMouseOverButton(mouseX, mouseY, newX, newY));
    btn.style.top= newY + "px";
    btn.style.left= newX + "px";
  }
  
  function isMouseOverButton(mX,mY, x, y) {
    const rect = btn.getBoundingClientRect();
    const conflict = (mX > x && mY < (x + rect.width) &&
        mY > y && mY < (y + rect.height));
    if (conflict) { console.log("Habrá que mover de nuevo"); }
    return conflict;
  }
});

let imgchange = document.getElementById("kuromimg"); 

function cambiando(){
    document.getElementById("frase1").innerHTML = "Yaaaay tiamooo!!";
    document.getElementById("frase2").innerHTML = "más te valía..."
    document.getElementById("frase3").innerHTML = "";

    imgchange.src = "./img/kuromiyay.gif";

    const btn1 = document.getElementById('botonY');
    btn1.disabled = true; 

    const btn2 = document.getElementById('boton_no');
    btn2.disabled = true; 
}

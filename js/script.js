function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function MoseEvent(){
  
  const aura = document.getElementById("aura");
  const circulo = document.getElementById("circulo");

  document.addEventListener("mousemove", (e) => {
    aura.style.left = `${e.clientX}px`;
    aura.style.top = `${e.clientY}px`;

    circulo.style.left = `${e.clientX}px`;
    circulo.style.top = `${e.clientY}px`;
  });
}

function modal(){
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal");
  const span = document.querySelector(".close");
  btn.onclick = () => {
    modal.style.display = "flex"; 
  }

  span.onclick = () => {
    modal.style.display = "none";
  }
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
}
}


function modal2(){
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal2");
  const span = document.querySelector(".close");
  btn.onclick = () => {
    modal.style.display = "flex"; 
  }

  span.onclick = () => {
    modal.style.display = "none";
  }
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
}
}


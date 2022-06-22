const button = document.querySelector("#btn")
const inp = document.getElementById('myInput');
const p = document.getElementById('myP');


button.addEventListener('click', () => {
    p.textContent = "Hello " + inp.value  + ", welcome to the bootcamp.";
  })
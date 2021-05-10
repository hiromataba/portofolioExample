
let form = document.querySelector('form');
let nom = document.getElementById('names').value;
nom.addEventListener('keyup',getNameInpt);

function getNameInpt(e){
    e.preventDefault();
    // console.log(e.target.value);
    
}
// Opiniones 
const reviews = [
    {
        id: 1,
        name: "Emma Stone",
        job: "Actriz",
        img: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1_.jpg",
        text: "La película ha estado bien, no es 'La la land', pero claro tampoco podemos esperar que lo sea. Lo mejor del cine han sido las palomitas y los trailers la verdad."

    },
    {
        id: 2,
        name: "Lewis Capaldi",
        job: "Cantante",
        img: "https://los40es00.epimg.net/los40/imagenes/2019/03/05/musica/1551800464_248417_1551800972_noticia_normal.jpg",
        text: "But now the day bleeds, into nightfall, and you're not give me through it all, pero claro, tampoco se le puede pedir peras al olmo. Asi que before you go te digo que forget me."

    },
    {
        id: 3,
        name: "Lisa Simpson",
        job: "Genia",
        img: "https://assets.stickpng.com/images/5a0c40b85a997e1c2cea116e.png",
        text: "Juego con mi melocotonero y toco el saxofón. Soy activista y opino que esto no se ha hecho con papel reutilizable asi que me cabreo. Ralph Wigumm es un niño de mi cole."

    },
    {
        id: 4,
        name: "Tommy Pickles",
        job: "Bebé",
        img: "https://static.wikia.nocookie.net/doblaje/images/c/c2/Tommy-Rugrats.png/revision/latest?cb=20220320213051&path-prefix=es",
        text: "No es tan buen juguete como Reptar, que es el mejor dinosaurio de todos. Ademas su destornillador deja mucho que desear, no tiene buen enganche para escaparnos de la jaula."

    },
];

// Seleccionar objetos
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Empezar los objetos
let currentItem = 0;

// Cargar objetos iniciales
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// Almacenar persona en una función
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Mostrar siguiente persona
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
    currentItem = 0;
    }
    showPerson();
});

// Mostrar persona anterior
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
}); 


// Mostrar persona aleatoria
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})
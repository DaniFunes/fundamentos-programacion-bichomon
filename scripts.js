console.log(document.title);
const tarjetas = document.querySelector('.infocard')

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
tarjetas.parentNode.previousSibling.previousSibling.textContent = "Generasión 1 Pokimon";

// Cambia el color de fondo de la primera generación de Pokimon.
tarjetas.parentNode.previousSibling.previousSibling.style.backgroundColor = "red";

// Imprime por consola la URL de la página.
console.log(document.URL)

// Imprime por consola el dominio de la página.
console.log(document.domain)

// Imprime todos los nodos de imagen.
console.log (document.querySelectorAll("img"))

// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const imagenes = document.querySelectorAll("img.img-fixed.img-sprite")
const imagenes2 = document.querySelectorAll("span.img-fixed.img-sprite")

for (let i=0; i<imagenes.length;i++) {
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

}

for (let j=0; j<imagenes2.length;j++) {
    imagenes2[j].dataset.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

}

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

const muted = document.querySelectorAll(".infocard-lg-data.text-muted a.itype.flying")
for (let j=0; j<muted.length;j++) {
    muted[j].style.backgroundColor = "red"

}
console.log(muted)




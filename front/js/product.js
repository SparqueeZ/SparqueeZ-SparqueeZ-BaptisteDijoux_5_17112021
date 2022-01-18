//Focus sur l'ID
const product = window.location.search.split("?id=").join("");
console.log(product);

let productData = [];

//Importe les données du produit (name,price,img, etc..)
const fetchProduct = async () =>
    await fetch(`http://localhost:3000/api/products/${product}`).then((res) => res.json())
    .then((promise) => {
        productData = promise
        console.log(promise);
    });

const productDisplay = async () => {
    await fetchProduct();

    //Affiche l'image du produit
    document.querySelector(".item__img")
        .innerHTML = `<img src="${productData.imageUrl}" alt="image test"></img>`;

    //Affiche le nom du produit
    document.getElementById("title")
        .innerHTML = `${productData.name}`;

    //Affiche le prix du produit
    document.getElementById("price")
        .innerHTML = `${productData.price}`;
    
    //Affiche la description du produit
    document.getElementById("description")
        .innerHTML = `${productData.description}`;
    
    //Affiche la couleur du produit
    let select = document.getElementById("colors")
    //Création d'une boucle avec forEach
    productData.colors.forEach(colors => {
        let colorSelect = document.createElement("option");
        //Nommer et insérer les valeurs des couleurs
        colorSelect.innerHTML = `${colors}`;
        colorSelect.value = `${colors}`;
        //Afficher la couleur dans la liste déroulante
        select.appendChild(colorSelect)
    });
}

productDisplay ()

const menu1Element = document.querySelector(".menu-1")
const price1Costo = document.querySelector(".price-1")
const menu2Element = document.querySelector(".menu-2")
const price2Costo = document.querySelector(".price-2")
const menu3Element = document.querySelector(".menu-3")
const price3Costo = document.querySelector(".price-3")
const menu4Element = document.querySelector(".menu-4")
const price4Costo = document.querySelector(".price-4")
const menu5Element = document.querySelector(".menu-5")
const price5Costo = document.querySelector(".price-5")
const menu6Element = document.querySelector(".menu-6")
const price6Costo = document.querySelector(".price-6")



const menu = [
    { id:"menu1", name:"Cafe Expresso Dobe", price:"13,99"},
    { id:"menu2", name:"Cafe Expresso Simple", price:"10,99"},
    { id:"menu3", name:"Cafe Capuchino", price:"13,00"},
    { id:"menu4", name:"Cafe latte", price:"14,00"},
    { id:"menu5", name:"Cafe Cortado", price:"11,99"},
    { id:"menu6", name:"cafe Negro", price:"9,00"},
]

if (menu.length >= 5){
    menu1Element.textContent = `${menu[0].name}`;
    price1Costo.textContent = `${menu[0].price}`;
    menu2Element.textContent = `${menu[1].name}`;
    price2Costo.textContent = `${menu[1].price}`;
    menu3Element.textContent = `${menu[2].name}`;
    price3Costo.textContent = `${menu[2].price}`;
    menu4Element.textContent = `${menu[3].name}`;
    price4Costo.textContent = `${menu[3].price}`;
    menu5Element.textContent = `${menu[4].name}`;
    price5Costo.textContent = `${menu[4].price}`;
    menu6Element.textContent = `${menu[5].name}`;
    price6Costo.textContent = `${menu[5].price}`;
}

function buscarProducto(){
    let input = document.querySelector(".input");
    let encontrado = false;
    

    menu.forEach( element => {
        if (input.value.toLowerCase() === element.name.toLowerCase()){
            encontrado = true;


            window.location.href = "#menu"
        } 

    })        



}




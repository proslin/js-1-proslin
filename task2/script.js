var prod1={
    name: "Сирень Красавица Москвы",
    imgSrc: "img/krasavica_moscvi.jpg",
    amount: 5,
    price: 1500
};
var prod2={
  name: "Сирень Сенсация",
    imgSrc: "img/sensaciya.jpg",
    amount: 5,
    price: 1300  
};
var prod3={
  name: "Сирень Мадам Лемуан",
    imgSrc: "img/madam_lemuan.jpg",
    amount: 5,
    price: 1200  
};

var sum=0;
var prodArray=[prod1, prod2, prod3];
function init() {
var prodBlock=document.querySelector(".catalog");
    for (var i=0; i<prodArray.length;i++){
 
var prod=document.createElement("div");    
    prod.className="product";
    var prodName=document.createElement("span");
    prodName.innerText=prodArray[i].name;    
    prod.append(prodName);
    var prodImg=document.createElement("img");
        prodImg.src=prodArray[i].imgSrc;
        prodImg.className="prodImg";
        prod.append(prodImg);
    var prodPrice=document.createElement("span");
        prodPrice.className="prodPrice";
        prodPrice.innerText=(prodArray[i].price+"\u20bd");
        prod.append(prodPrice);
        var buyBtn=document.createElement("button");
        buyBtn.className="buyBtn";
        buyBtn.setAttribute("id","btn_"+i);
        buyBtn.innerText="Купить";
        buyBtn.onclick=addToCart;
        prod.append(buyBtn);
        prodBlock.append(prod);
  } 
 }

    function addToCart(e) {
    var selectedProd=prodArray[e.target.id.split("_")[1]]; 
        var selectedProdTable=document.querySelector(".selected_products");
        var tr, td;
        tr=document.createElement("tr");
        selectedProdTable.append(tr);        
        td=tr.insertCell();
        //td=document.createElement("td");
        td.innerText=selectedProd.name;
        var td=tr.insertCell();
        td.innerText=selectedProd.price;
       sum+= selectedProd.price;
        var totalAmount=document.querySelector(".totalAmount");
        totalAmount.innerText="Итого: "+sum+" \u20bd";
    }
window.onload=init;

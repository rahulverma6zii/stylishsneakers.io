let x1 = document.getElementsByClassName("about-us");
let heart = document.getElementsByClassName("fa-heart");
let img=document.getElementsByTagName("img");
let shoes_row = document.getElementsByClassName("shoes-row");
let row=document.getElementsByClassName("row");
let total_item=document.getElementsByClassName("total-item")[0];
let Shoes = [
    {
        name: "Shoe1",
        price: 499,
        image: "images/s1.jpg"
    },
    {
        name: "Shoe2",
        price: 599,
        image: "https://img.freepik.com/free-photo/one-black-sneaker-shoe-isolated-white_93675-131266.jpg?w=900&t=st=1697287112~exp=1697287712~hmac=0bfc59d7bfeb46664a69c24ec7c3e98a16ec5b53705299f09df3376020ca3008"
    },
    {
        name: "Shoe3",
        price: 499,
        image: "images/s3.jpg"
    },
    {
        name: "Shoe4",
        price: 499,
        image: "images/s4.jpg"
    },
    {
        name: "Shoe5",
        price: 499,
        image: "images/s5.jpg"
    }, {
        name: "Shoe6",
        price: 499,
        image: "images/s6.jpg"
    },
    {
        name: "Shoe7",
        price: 499,
        image: "images/s7.jpg"
    },
    {
        name: "Shoe8",
        price: 499,
        image: "images/s8.jpg"
    }

]
for (let i = 0; i < 4; i++) {
    shoes_row[0].innerHTML += `
        <div class="col-6 col-lg-3 col-md-6">
        <div class="card overflow-hidden">
             <i class="fa fa-heart"></i>
             <div class="overflow-hidden h-75">
            <img class="card-img-top img-fluid" src="${Shoes[i].image}" alt="">
            </div>
            <div class="card-body">
            <div class="row align-items-center ">
                <div class="col-9">
                <h5 class="card-title">${Shoes[i].name}</h5>
                <p class="card-text">Rs.${Shoes[i].price}</p>
                </div>
                <div class="col-3">
                <button class="btn btn-warning btn-outline-dark fw-bolder" onclick="addToCart();">+</button>
                </div>
            </div>
        </div>
        
    </div>
        `
}

for (let i = 0; i < heart.length; i++) {
    const element = heart[i];
    element.addEventListener("click", function () {
        element.classList.toggle("heart-red")
    })
   
}
for (let i  = 0; i < img.length; i++) {
    img[i].classList.add("img-fluid")
    
}

function addToCart(){
total_item.innerHTML++;
}

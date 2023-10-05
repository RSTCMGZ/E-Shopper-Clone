const menu = [
    {
        id: 1,
        title: "T-Shırt  ",
        category: "Polo T-Shirt",
        price: 15.99,
        img: "./images/home/gallery1.jpg",

    },
    {
        id: 2,
        title: "Sweet T-Shırt",
        category: "Blazers",
        price: 13.99,
        img: "./images/home/gallery2.jpg",


    },
    {
        id: 3,
        title: "Ceket",
        category: "Sunglass",
        price: 6.99,
        img: "./images/home/gallery3.jpg",


    },
    {
        id: 4,
        title: "Çanta",
        category: "Kıds",
        price: 20.99,
        img: "./images/home/gallery4.jpg",


    },

];


const sectionCenter = document.querySelector("#row");
const filterBtn = document.querySelectorAll(".filter-btn")


//Yüklenen cart divleri
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
});

//Filtreli buttonlar
filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem
            }
        })
        if (category === "T-Shirt") {
            displayMenuItems(menu)
        }
        else {
            displayMenuItems(menuCategory)
        }
    })
})


function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map(function (item) {

        return `
        <div class="col-sm-3 ">
        <div class="product-img-wrapper product-wrapper position-relative">
        <div class=" text-center">
        <img src="${item.img}" width="100%" alt="">
        <span>$${item.price}</span>
        <p>${item.title}</p>
        <a href="#" class="btn add-to-cart"><i class="bi bi-cart mx-2"></i>Add to cart</a>
      </div>

      </div>
        </div>
        `

    });
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
}
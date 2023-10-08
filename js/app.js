// localstorage'ye product'tan ürün yüklemek
async function getData() {
    const photos = await fetch("../js/data.json")
    const data = await photos.json()

    data ? localStorage.setItem("products", JSON.stringify(data)) : [] // eğer datanın içerisinde veri var ise göster yok ise boş bir array döndür
    productsFunc()
}

getData()


// localstorage'ye cartItems'ten ürün yüklemek

const cartItems = document.querySelector(".header-cart")

cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0"

//! eğer localstoragenin içerisinde kaç tane kart var ise sayfa yenilendiğinde onu göster yok ise 0 göster.
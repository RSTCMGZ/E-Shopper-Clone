async function getData() {
    const photos = await fetch("../js/data.json")
    const data = await photos.json()

    data ? localStorage.setItem("products", JSON.stringify(data)) : [] // eğer datanın içerisinde veri var ise göster yok ise boş bir array döndür
    productsFunc() //! bunu burda cagırdık çünkü sayfa yenilendiğinde direk gelmiyor 2.kez yenilenmesi gerekiyordu.
}

getData()

const cartItems = document.querySelector(".header-cart")

cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0"

//! eğer localstoragenin içerisinde kaç tane kart var ise sayfa yenilendiğinde onu göster yok ise 0 göster.




//!sepete eklediğimiz tüm ürünleri cart sayfasına taşıdık
function displayCartProduct() {
    const cartWrapper = document.querySelector(".cart-wrapper")
    let result = ""
    cart.forEach((item) => {
        result += `
        
        <tr>
        <td class="cart-product">
            <a href="#"><img src=${item.img.singleImage} width="20%"  alt=""></a>
        </td>
        <td class="cart-desc">
            <h4><a href="#">${item.name}</a></h4>
        </td>
        <td class="cart-price">
            <p>$${item.price.oldPrice.toFixed(2)}</p>
        </td>
        <td class="cart-quantity">
            <div class="cart-quantity-btn">
            <span>1</span
            </div>
        </td>
        <td class="cart-total">
            <div class="cart_total_price">$${(item.price.oldPrice * item.quantity).toFixed(2)}</div>
        </td>
        <td class="cart-delete">
            <button class="cart_quantity_delete">
                <i class="bi bi-x-lg" data-id="${item.id}"></i>
            </button>
        </td>
    </tr>
        `
    })
    cartWrapper.innerHTML = result
    removeCartItem()

}

displayCartProduct()
//!sepetten silme işlemleri

function removeCartItem() {
    const btnDeleteCart = document.querySelectorAll(".bi-x-lg")
    let cartItems = document.querySelector(".header-cart")
    btnDeleteCart.forEach((button) => {
        button.addEventListener("click", (e) => {
            const id = e.target.dataset.id
            cart = cart.filter((item) => item.id !== Number(id))
            displayCartProduct()//!ürünler silindi.
            localStorage.setItem("cart", JSON.stringify(cart))//Silme işlemi yaptığında sayfayı yenilediğinde tekrardan silinen ürün gelmeyecek.
            cartItems.innerHTML = cart.length //! karttan sildiğinde yukarıdaki de bir eksilsin.
            saveCartValues()//!tıklandıgında ekranı güncelleyip güncel ücreti yazsın.
        })

    })
}
//!hesaplama işlemleri

function saveCartValues() {
    const cartTotal = document.getElementById("cart-total")
    const subTotal = document.getElementById("sub-total")
    const fastCargo = document.getElementById("fast-cargo")

    let itemsTotal = 0; //ilk olarak değerleri sıfır olarak kabul ettik

    const fastCargoPrice = 15; //hızlı kargo ödemesi
    cart.length > 0 &&
        cart.map((item) => itemsTotal += item.price.oldPrice * item.quantity) //map ile item(her bir elemanı döndürdük) ve cartın uzunluğu büyük ise 0 dan fiyat çarpı itemin adeti itemstotal'e eşitledik.
    subTotal.innerHTML = `${itemsTotal.toFixed(2)}` //toplamını yazdırdık
    cartTotal.innerHTML = `${itemsTotal.toFixed(2)}`//Toplamını yazdırdık
    fastCargo.addEventListener("change", (e) => {
        if (e.target.checked) {// checkboX'a tıkladıgında + olarak fastcargoprice eklensin.
            cartTotal.innerHTML = `${(itemsTotal + fastCargoPrice).toFixed(2)}`
        } else {// checkboX'a tıkladıgında tıklanan silinsin.
            cartTotal.innerHTML = `${itemsTotal.toFixed(2)}`
        }
    })
}
saveCartValues()
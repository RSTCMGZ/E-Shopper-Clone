let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []  // eğer datanın içerisinde veri var ise göster yok ise boş bir array döndür
let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] //eğer localstoragenin içinde "cart" "?" var ise yazdır yok ise ":" boş bir array [] döndür.


function addToCart() {
  const cartItems = document.querySelector(".header-cart")
  const buttons = [...document.getElementsByClassName("add-to-cart")] //for each ile döndürebilmek için []içine yazdık
  buttons.forEach((button) => {
    const inCart = cart.find((item) => item.id === Number(button.dataset.id)) //kartın içerisindeki eklediklerimin eşitse buttonun içindeki id'e
    if (inCart) {
      button.setAttribute("disabled", "disabled") //button disabled yani tıklanamaz olsun
    } else {

      button.addEventListener("click", (e) => { // button'a tıkladığımızda
        e.preventDefault()//Sayfa yenilenmemesi için yazdık
        const id = e.target.dataset.id
        const findProduct = products.find((product) => product.id === Number(id)) //içerisinden ürünleri bulduk
        console.log(findProduct);

        cart.push({ ...findProduct, quantity: 1 }) //push metodu ile yayıp içerisindekileri aldık
        localStorage.setItem("cart", JSON.stringify(cart)) //localstorage'ye ekledik
        button.setAttribute("disabled", "disabled") //button disabled yani tıklanamaz olsun
        cartItems.innerHTML = cart.length // butona tıkladıgımızda kac adet var ise o kadar artsın.
      })
    }
  })

}








function productsFunc() {
  const productsContainer = document.querySelector("#product-list")
  let results = "" //boş bir değişken oluşturup onu for eachin içinde +1 artırarak cartları dizdik.
  products.forEach((item) => { // data jsondan veri çektik.foreach ile  döndürdük.
    //!data idler ile javascript bağlantısı yakaladık.
    results += `
      <div class="col-sm-4">
      <div class="product-img-wrapper position-relative">
        <div class="product-single2 text-center">
          <img src=${item.img.singleImage} width="100%" alt="">
          <span>$${item.price.newPrice.toFixed(2)}</span>
          <p>${item.name}</p>
          <button  class="btn add-to-cart"  data-id="${item.id}"><i class="bi bi-cart mx-2"></i>Add to cart</button>
        </div>
        
            <div class="product-choose ">
          <ul class="d-flex gap-1 mb-0  px-0 align-items-center justify-content-center  ">
            <li><a href="#"><i class="bi bi-plus-square"></i>Add to wishlist</a></li>
            <li><a href="#" class="mx-1"><i class="bi bi-plus-square "></i>Add to compare</a></li>
          </ul>
        </div>
        </div>
      </div>
          `;
    productsContainer ? productsContainer.innerHTML = results : "";
    //! (?)içerisinde var ise productscontainer.innerHTML'i göster,yok ise : "" göster  
    addToCart();
  })

}
productsFunc //! bunu burda cagırdık çünkü sayfa yenilendiğinde direk gelmiyor 2.kez yenilenmesi gerekiyordu.

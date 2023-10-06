
function productsFunc() {
    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []  // eğer datanın içerisinde veri var ise göster yok ise boş bir array döndür
    const productsContainer = document.querySelector("#product-list")
    let results = "" //boş bir değişken oluşturup onu for eachin içinde +1 artırarak cartları dizdik.
    products.forEach((item) => { // data jsondan veri çektik.foreach ile  döndürdük.
        results += `
      <div class="col-sm-4">
      <div class="product-img-wrapper position-relative">
        <div class="product-single2 text-center">
          <img src=${item.img.singleImage} width="100%" alt="">
          <span>$${item.price.newPrice.toFixed(2)}</span>
          <p>${item.name}</p>
          <button href="#" class="btn add-to-cart"><i class="bi bi-cart mx-2"></i>Add to cart</button>
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
    })

    productsContainer ? productsContainer.innerHTML = results : "";
}

productsFunc()
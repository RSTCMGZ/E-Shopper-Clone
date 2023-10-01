const config = {
    type: "carousel",
    perView: 1,
    gap: 1,
    autoplay: 3000,
    breakpoints: {
        992: {
            perView: 3,
        },
        768: {
            perView: 2,
        },
        576: {
            perView: 1,
        },
    },
}

new Glide(".product_carousel", config).mount()



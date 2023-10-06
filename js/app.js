async function getData() {
    const photos = await fetch("../js/data.json")
    const data = await photos.json()

    data ? localStorage.setItem("products", JSON.stringify(data)) : [] // eğer datanın içerisinde veri var ise göster yok ise boş bir array döndür
}

getData()

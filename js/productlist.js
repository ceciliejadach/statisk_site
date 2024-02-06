fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //fang template
  const template = document.querySelector("#smallProductTemplate").content;

  //lav en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img").src = imagePath;
  copy.querySelector(".subtle").textContent = product.articletype;
  copy.querySelector(".price").textContent = product.price;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    //produktet er på udsalg
    copy.querySelector("article").classList.add("onSale");
  }

  copy.querySelector(".read_more_btn").setAttribute("href", `product.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}

// <article class="smallProduct">
// <img src="https://kea-alt-del.dk/t7/api/products/1533" alt="t-shirt">
// <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
// <p class="subtle">T-shirts Puma</p>
// <p class="price"><span>Prev.</span> DKK 1595,-</p>
// <div class="discounted">
//     <p>Now DKK 1560,-</p>
//     <p>-34%</p>
// </div>
// <a href="product.html">Read more</a>
// </article>

// {
//     "id": 1163,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "season": "Summer",
//     "productionyear": 2011,
//     "usagetype": "Sports",
//     "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//     "price": 895,
//     "discount": null,
//     "brandname": "Nike",
//     "soldout": 0
//   }

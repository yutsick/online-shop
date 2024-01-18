const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=9");
    const products = await response.json();
    return products;
  };
  
  const renderProducts = async () => {
    const products = await getProducts();
    const container = document.querySelector(".products-container");
    for (const item of products) {
      // creating elements
      const productWrapper = document.createElement("li");
      const productImg = document.createElement("img");
      const productTitle = document.createElement("h4");
      const productDescription = document.createElement("p");
      const productPriceSection = document.createElement("section");
      const productPrice = document.createElement("span");
      const productBuyBtn = document.createElement("button");
      // setting values for elements
      productWrapper.classList.add("product-item");
      productPriceSection.classList.add("product-item-price");
      productImg.src = item.image;
      productTitle.innerText = item.title;
      productDescription.innerText = item.description;
      productPrice.innerText = `${item.price}$`;
      productBuyBtn.innerText = "Add to cart";

      // appending elements inside the wrappers
      productPriceSection.append(productPrice, productBuyBtn);
      productWrapper.append(
        productImg,
        productTitle,
        productDescription,
        productPriceSection
      );
      container.append(productWrapper);
    }
  };
  
  renderProducts();
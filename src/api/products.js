export async function getProducts() {
    const response = await fetch("https://dummyjson.com/products/category/smartphones?limit=20");
    const data = await response.json();


    return data.products;
}
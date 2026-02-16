//local storgae doesnt append , it repalces the whole value

const STORAGE_KEY = "products"; //bucket name inside local storage

export function getProducts() {
  const data = localStorage.getItem(STORAGE_KEY);
  console.log("from data", data);
  return data ? JSON.parse(data) : []; //converting to array if data exists, else return empty array
}

export function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products)); //object to string conversion fopr storage as local storage can only store strings
  console.log("saved data", products);
}
export function addProduct(product) {
  const products = getProducts();
  products.push(product); //add new product at end 
  saveProducts(products);
  console.log("Product added:", product);
}

export function deleteProduct(id) {
  const products = getProducts();
  const updatedProducts = products.filter((product) => product.id !== id);
  saveProducts(updatedProducts);
}

export function updateProduct(updatedProduct) {
  const products = getProducts();
  const updated = products.map(p =>
    p.id === updatedProduct.id ? updatedProduct : p
  );
  saveProducts(updated);
}

export function productIdExists(id) {
  const products = getProducts();
  return products.some(p => p.id === id);
}
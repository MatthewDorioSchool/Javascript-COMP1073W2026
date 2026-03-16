/**
 * Constructor for Toy Car objects based on ModelToyCars.com
*/
// ToyCar constructor function
function ToyCar(brand, model, year, scale, color, price, sku, material, features, stock) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.scale = scale;
    this.color = color;
    this.price = price;
    this.sku = sku;
    this.material = material;
    this.features = features;
    this.instock = stock;
}
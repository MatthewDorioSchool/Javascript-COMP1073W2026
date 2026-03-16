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

    // Method to update car color (Interaction)
    this.updateColor = function(newColor) {
        this.color = newColor;
        this.sku = `${this.sku.split('-')[0]}-${newColor.toUpperCase()}`;
    };
}

// Instantiate the product Based on the Blue 1967 Chevy Impala
const impala = new ToyCar(
    "Kinsmart", 
    "Chevy Impala Hard Top", 
    1967, 
    "1/43", 
    "Blue", 
    6.99, 
    "5418D-BLUE", 
    ["Diecast Metal", "Plastic", "Rubber"], 
    ["Pull back motor action", "Opening doors", "Coke bottle styling"], 
    5, 
    6
);
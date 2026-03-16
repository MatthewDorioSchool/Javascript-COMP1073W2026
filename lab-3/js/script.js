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
    ["Pull back motor action", "Opening doors", "Detailed interior"], 
    5, 
    6
);

// Function to render the product details on the page

function renderProduct() {
    document.getElementById('car-name').textContent = `${impala.year} ${impala.brand} ${impala.model}`;
    document.getElementById('car-sku').textContent = impala.sku;
    document.getElementById('car-price').textContent = `$${impala.price.toFixed(2)}`;
    document.getElementById('car-color').textContent = impala.color;
    document.getElementById('car-materials').textContent = impala.materials.join(", ");
    
    const featureList = document.getElementById('car-features');
    featureList.innerHTML = "";
    impala.features.forEach(f => {
        let li = document.createElement('li');
        li.textContent = f;
        featureList.appendChild(li);
    });
}


// Function to repaint the car with a new random color and update the display
function repaintCar() {
    const colors = ["Black", "Red", "White", "Blue"];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    impala.updateColor(newColor);
    renderProduct();
}
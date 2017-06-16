class Product {
    constructor(id,
                title,
                price,
                rating,
                description,
                categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.categories = categories;
    }
}

module.exports = Product;
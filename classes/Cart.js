class Cart {
    constructor () {
        this.total = 0
        this.products = []
    }

    addProduct() {
        if (!(product instanceof Product)) {
            throw new error ("Only products can be added")
        }
        this.products.push(product)
        this.total += product.price
    }
    removeProduct(index) {
        let removedProduct = this.products.splice(index, 1)[0]
        this.total -= removedProduct.price
    }
}
module.exports = Cart
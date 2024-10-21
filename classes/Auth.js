class Auth {
    constructor() {
        this.customers = []
    }
    register (name, email, shippingAddress) {
        let newCustomer = new Customer(name, email, shippingAddress)
        this.customers.push(newCustomer)
    }
    login (email) {
        const customer = this.customers.get(email)
        return customer
    }
}
module.exports = Auth
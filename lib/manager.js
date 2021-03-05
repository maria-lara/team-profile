const Employee = require("./Eeployee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getOfficeNumber() {
        return `Office Phone Number: ${this.officeNumber}`
    }
}

module.exports = Manager
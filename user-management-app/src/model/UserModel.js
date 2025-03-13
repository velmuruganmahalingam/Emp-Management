export class User {
    constructor(name = "", company_name = "", role = "", country = "") {
        this.name = name;
        this.company_name = company_name;
        this.role = role;
        this.country = country;
    }

    isValid() {
        return this.name.trim() !== "" && this.company_name.trim() !== "";
    }
}

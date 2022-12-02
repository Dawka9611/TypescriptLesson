export class Invoice {
    // client: string;
    // detail: string;
    // amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.detail = d;
    //     this.amount = a
    // }
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.detail}`;
    }
}

export class Invoice {
    // client: string;
    // detail: string;
    // amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.detail = d;
    //     this.amount = a
    // }
    constructor(
        readonly client: string,
        private detail: string,
        public amount: number
    ) {

    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.detail}`
    }
}
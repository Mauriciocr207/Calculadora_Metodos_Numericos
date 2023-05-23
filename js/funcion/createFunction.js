export class Funcion {
    constructor(expresion = "") {
        this.expresion = expresion;
    }
    evaluate(num) {
        const funcion = this.expresion.replace(/x/g, `(${num})`);
        return math.evaluate(funcion);
    }
}

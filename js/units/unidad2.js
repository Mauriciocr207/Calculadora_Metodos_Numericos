import { Funcion } from "../funcion/createFunction.js";
function biseccion(inf = new Number, sup, f = "", tol) {
    const results = [];
    const funcion = new Funcion(f);
    let x_l = inf;
    let x_u = sup;
    let x_r = x_l;
    let x_rold;
    let e_a = 100;
    results.push({
        x_l: x_l,
        x_u: x_u,
        x_r: x_r,
        e_a: e_a
    });
    while(e_a > tol) {
        x_rold = x_r;
        x_r = (x_l + x_u) / 2;
        e_a = 100 * math.abs((x_r - x_rold ) / x_r );
        // CASES
        const val = funcion.evaluate(x_l) * funcion.evaluate
        (x_r);
        if(val > 0) x_l = x_r;
        if(val < 0) x_u = x_r;
        if(val == 0) e_a = 0;
        // Guardar resultados
        results.push({
            x_l: x_l,
            x_u: x_u,
            x_r: x_r,
            e_a: e_a
        });
    }
    return {
        results: results,
        raiz: x_r
    };
}

export { biseccion };
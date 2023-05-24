import { Funcion } from "../funcion/createFunction.js";
// ECUACIONES TRASCENDENTALES
function Biseccion(inf = 0, sup = 0, f = "", tol = 0) {
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
function FalsaPosicion(inf = 0, sup = 0, f = "", tol = 0) {
    const funcion = new Funcion(f);
    let x_l = inf;
    let x_u = sup;
    let x_r = x_l;
    let e_a = 100; 
    let f_l = funcion.evaluate(x_l);
    let f_u= funcion.evaluate(x_u);
    const results = [];
    results.push({
        x_l: x_l,
        x_u: x_u,
        x_r: x_r,
        e_a: e_a
    });
    while(e_a > tol) {
        let x_rold = x_r;
        x_r = x_u - (f_u * (x_l - x_u)) / (f_l - f_u);
        e_a = 100 * math.abs((x_r - x_rold ) / x_r );
        const val = f_l * funcion.evaluate(x_r);
        if(val > 0) {
            x_l = x_r;
            f_l = funcion.evaluate(x_l);
        }
        if(val < 0) {
            x_u = x_r;
            f_u = funcion.evaluate(x_u);
        }
        if(val == 0) {
            e_a = 0;
        }
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
};
function NewtonRaphson(x_i, f = "", tol = 0, n_max = 0) {
    let results = [];
    let x_r = x_i;
    let n = 0;
    let e_a = 100; 
    const funcion = new Funcion(f);
    const derivative = new Funcion(
        math.derivative(funcion.expresion, "x").toString()
    );
    results.push({
        x_r: x_r,
        f_xr: funcion.evaluate(x_r),
        e_a: e_a
    });
    while(e_a > tol && n < n_max) {
        x_i = x_r;
        const fx = funcion.evaluate(x_i);
        const Dx = derivative.evaluate(x_i);
        x_r = x_i - fx/ Dx;
        e_a = 100 * math.abs((x_r - x_i) / x_r);
        n++;
        results.push({
            x_r: x_r,
            f_xr: funcion.evaluate(x_r),
            e_a: e_a
        });
    }
    return results;
}
// ECUACIONES POLINOMIALES
function Tartaglia_Cardano(coeficientes) {
    const {a,b,c,d} = coeficientes;
    const B = b / a;
    const C = c/a;
    const D = d / a;
    const p = (3 * C - math.pow(B,2)) / 3;
    const q = (2*math.pow(B,3) - 9*B*C + 27*D)/27;
    const delta = math.pow(q,2) + (4*math.pow(p,3))/27;
    let z1 = '', z2 = '', z3 = '';
    if(delta > 0) {
        const u = math.nthRoot((-q+math.sqrt(delta))/2,3);
        const v = math.nthRoot((-q-math.sqrt(delta))/2,3);
        z1 = `${u + v}`;
        z2 = `${-1/2 * (u + v)} + ${math.sqrt(3) / 2 * (u + v)}i`;
        z2 = `${-1/2 * (u + v)} - ${math.sqrt(3) / 2 * (u + v)}i`;
    }
    if(delta == 0) {
        z1 = 3 * q / p;
        z2 = z1 / -2;
        z3 = z2;
    }
    if(delta < 0) {
        const w = 2 * math.sqrt(-p / 3);
        const theta = math.acos(((3 * q) / (2*p)) * (math.sqrt(-3 / p)));
        z1 = w * math.cos(theta / 3);
        z2 = w * math.cos((theta + 2*math.pi) / 3);
        z3 = w * math.cos((theta + 4*math.pi) / 3);
    }
    return {
        x1 : z1 - B / 3,
        x2 : z2 - B / 3,
        x3 : z3 - B / 3
    }
}

export { Biseccion, FalsaPosicion, NewtonRaphson, Tartaglia_Cardano };
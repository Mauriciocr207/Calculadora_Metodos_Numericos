function InterpolacionNewton(x = [], f = [], p0) {
    let tablaDif = [];
    const n = x.length;
    tablaDif.push(f);
    for (let i = 1; i < n; i++) {
        const aux = tablaDif[i-1];
        const aux2 = [];
        for (let j = 0; j < n - i; j++) {
            const value = aux[j+1] - aux[j];
            aux2.push(value);
        }
        tablaDif.push(aux2);
    }
    const indices = [];
    for (let i = 0; i < n; i++) {
        indices.push(tablaDif[i][0]);
    }

    // Interpolar
    const xi = x[0];
    const D = x[1] - x[0];
    const k = (p0 - xi) / D;
    let resultado = indices[0];
    
    for (let i = 1; i < indices.length; i++) {
        let numerador = 1;
        for (let j = 0; j < i; j++) {            
            numerador *= (k - j);            
        }
        resultado += numerador / math.factorial(i) * indices[i];
    }

    return resultado;
    
}
function InterpolacionLagrange(x = [], f = [], p0) {
    const n = x.length;
    let y = 0;
    for (let i = 0; i < n; i++) {
        let num = 1;
        let den = 1;
        for (let j = 0; j < n; j++) {
            if(i != j) {
                num *= (p0 - x[j]);
                den *= (x[i] - x[j]);
            }
        }
        y += f[i] * num / den;
    }
    return y;
}



export {InterpolacionNewton, InterpolacionLagrange};
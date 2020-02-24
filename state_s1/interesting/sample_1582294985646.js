function main() {
for (const v1 in "boolean") {
    function v6(v7,v8,v9,v10,v11) {
        'use strict'
    }
    const v12 = v6.toLocaleString();
    // v12 = .unknown
    const v14 = [];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v15 = {a:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
    const v16 = {__proto__:eval,constructor:v15,length:v14};
    // v16 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"], withMethods: ["__proto__"])
    let v19 = 0;
    const v23 = v16.__proto__(v12,v19,19873,Symbol,eval);
    // v23 = .unknown
    let v26 = 0;
    const v27 = v26 + 1;
    // v27 = .primitive
    v26 = v27;
}
}
%NeverOptimizeFunction(main);
main();

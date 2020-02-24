function main() {
for (const v1 in "boolean") {
    function v6(v7,v8,v9,v10,v11) {
        'use strict'
    }
    const v12 = v6.toLocaleString();
    // v12 = .unknown
    const v14 = [];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v15 = {a:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
    const v16 = {__proto__:eval,constructor:v15,length:v14};
    // v16 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["__proto__"])
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

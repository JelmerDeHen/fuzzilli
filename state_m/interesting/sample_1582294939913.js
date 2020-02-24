function main() {
for (const v1 in "boolean") {
    function v6(v7,v8,v9,v10,v11) {
        'use strict'
    }
    const v12 = v6.toLocaleString();
    // v12 = .unknown
    const v14 = [];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v15 = {a:v14};
    // v15 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
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

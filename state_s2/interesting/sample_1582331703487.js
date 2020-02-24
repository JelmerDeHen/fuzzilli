function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5) {
    let v7 = this;
    let v8 = v7;
    const v11 = new Proxy(v8,Object);
    // v11 = .unknown
    const v12 = Object.freeze(v11);
    // v12 = .undefined
    function v14(v15,v16,v17,v18,v19) {
        'use strict'
    }
    const v20 = v14.toLocaleString();
    // v20 = .unknown
    const v22 = [];
    // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v23 = {a:v22};
    // v23 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
    const v24 = {__proto__:eval,constructor:v23,length:v22};
    // v24 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"], withMethods: ["__proto__"])
    try {
        let v27 = 0;
        const v28 = v24.__proto__(v20,v27,19873,Symbol,eval);
        // v28 = .unknown
    } catch(v29) {
    }
}
const v30 = v1.some(v3,v2);
// v30 = .boolean
let v34 = 0;
const v35 = v3();
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();

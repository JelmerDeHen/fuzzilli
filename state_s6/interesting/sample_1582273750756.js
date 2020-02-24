function main() {
let v9 = 0;
let v12 = 0;
let v15 = 0;
let v21 = 0;
function v26(v27,v28,v29,v30) {
    'use strict'
    try {
        const v34 = [1337,1337,1337,1337];
        // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v35 = [1805143900];
        // v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        const v39 = typeof "object";
        // v39 = .string
        const v41 = v39 === "object";
        // v41 = .boolean
        const v42 = typeof v35;
        // v42 = .string
        const v44 = v42 === "number";
        // v44 = .boolean
        const v48 = {get:Array};
        // v48 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v50 = Object.defineProperty(Array,"length",v48);
        // v50 = .undefined
        Array.length = 0;
    } catch(v54) {
    }
}
const v58 = v26(Reflect,Reflect,1337,9007199254740993);
// v58 = .unknown
}
%NeverOptimizeFunction(main);
main();

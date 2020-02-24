function main() {
const v4 = [13.37,"caller",eval];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v7(v8,v9) {
    const v12 = {set:v7,get:v7};
    // v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v14 = Object.defineProperty(arguments,7,v12);
    // v14 = .undefined
    const v15 = Object.getOwnPropertyDescriptors(arguments);
    // v15 = .object()
}
const v16 = v6.sort(v7);
// v16 = .undefined
const v17 = {__proto__:1337};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v18 = v4;
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v21 = v20;
let v23 = undefined;
let v27 = 0;
v23 = v18;
const v28 = v7(...v23,v17,...v16);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();

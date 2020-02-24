function main() {
function v0(v1,v2) {
    const v5 = {set:v0,get:v0};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v7 = Object.defineProperty(arguments,7,v5);
    // v7 = .undefined
    const v8 = Object.getOwnPropertyDescriptors(arguments);
    // v8 = .object()
}
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v11 = v10;
const v12 = v0(v11);
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();

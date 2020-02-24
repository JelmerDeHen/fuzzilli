function main() {
function v0(v1,v2) {
    const v5 = {set:v0,get:v0};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v7 = Object.defineProperty(arguments,7,v5);
    // v7 = .undefined
    const v8 = Object.getOwnPropertyDescriptors(arguments);
    // v8 = .object()
}
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v11 = v10;
const v12 = v0(v11);
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();

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
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v11 = v10;
const v12 = v0(v11);
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();

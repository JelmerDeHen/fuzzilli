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
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v11 = v10;
const v12 = v0(v11);
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();

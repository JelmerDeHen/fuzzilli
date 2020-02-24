function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
function v4(v5,v6) {
    const v9 = {set:v4,get:v4};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v11 = Object.defineProperty(arguments,-1,v9);
    // v11 = .undefined
    const v12 = Object.getOwnPropertyDescriptors(arguments);
    // v12 = .object()
}
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v15 = v14;
const v16 = v4(v15);
// v16 = .unknown
v2 = v3;
}
%NeverOptimizeFunction(main);
main();

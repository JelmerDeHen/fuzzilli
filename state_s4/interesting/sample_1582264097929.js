function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
function v4(v5,v6) {
    const v9 = {set:v4,get:v4};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v11 = Object.defineProperty(arguments,-1,v9);
    // v11 = .undefined
    const v12 = Object.getOwnPropertyDescriptors(arguments);
    // v12 = .object()
}
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v15 = v14;
const v16 = v4(v15);
// v16 = .unknown
v2 = v3;
}
%NeverOptimizeFunction(main);
main();

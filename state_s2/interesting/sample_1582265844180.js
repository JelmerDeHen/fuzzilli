function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v5(v6,v7) {
    const v10 = {set:v5,get:v5};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v12 = Object.defineProperty(arguments,7,v10);
    // v12 = .undefined
    const v13 = Object.getOwnPropertyDescriptors(arguments);
    // v13 = .object()
}
const v14 = v1.sort(v5);
// v14 = .undefined
let v17 = 0;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v22 = v17 + 1;
// v22 = .primitive
v17 = v22;
}
%NeverOptimizeFunction(main);
main();

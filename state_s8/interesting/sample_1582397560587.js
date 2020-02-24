function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
let v4 = undefined;
function v6(v7,v8,v9,v10,v11) {
}
const v13 = [13.37];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v16 = -1024;
while (v16 < 5) {
    const v17 = {set:v6,get:gc};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v19 = Object.defineProperty(v13,v16,v17);
    // v19 = .undefined
    const v20 = v16 + 1;
    // v20 = .primitive
    v16 = v20;
}
}
%NeverOptimizeFunction(main);
main();

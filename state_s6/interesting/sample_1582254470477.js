function main() {
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v14 = [13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
for (const v15 in "object") {
    const v16 = !v14;
    // v16 = .boolean
    const v17 = Object(v16,v15,4294967297);
    // v17 = .object()
    const v19 = {set:Object,constructor:Object};
    // v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "constructor"])
    const v21 = Object.defineProperty(v17,-2676874943,v19);
    // v21 = .undefined
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [-531818.718609194,-531818.718609194,-531818.718609194,-531818.718609194];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = [v7,268435456,v3];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v10 = 0;
while (v10 < 1337) {
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    const v12 = new Set(v8);
    // v12 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["add", "clear", "delete", "entries", "has", "forEach", "keys", "values"])
    const v13 = v12.values();
    // v13 = .object()
    v12.__proto__ = v13;
}
}
%NeverOptimizeFunction(main);
main();

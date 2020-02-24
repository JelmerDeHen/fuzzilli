function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
try {
    const v4 = Object.create(Object,v1);
    // v4 = .object()
} catch(v5) {
}
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
}
%NeverOptimizeFunction(main);
main();

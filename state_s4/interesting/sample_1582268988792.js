function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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

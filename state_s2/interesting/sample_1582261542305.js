function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = {d:1337,constructor:v1,toString:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "constructor", "d"])
let v5 = 0;
let v6 = v2;
try {
    delete v6[v6];
} catch(v7) {
}
const v8 = v5 + 1;
// v8 = .primitive
v5 = v8;
}
%NeverOptimizeFunction(main);
main();

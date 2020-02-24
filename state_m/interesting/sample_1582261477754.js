function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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

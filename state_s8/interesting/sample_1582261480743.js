function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v2 = {d:1337,constructor:v1,toString:v1};
// v2 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "constructor", "d"])
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

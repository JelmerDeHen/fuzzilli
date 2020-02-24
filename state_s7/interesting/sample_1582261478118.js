function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {d:1337,constructor:v1,toString:v1};
// v2 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "d", "__proto__"])
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

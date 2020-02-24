function main() {
const v1 = [1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = {d:1337,constructor:v1,toString:v1};
// v2 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "toString"])
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

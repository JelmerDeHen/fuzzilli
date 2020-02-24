function main() {
const v20 = Array[1024];
// v20 = .unknown
let v23 = 0;
try {
    const v24 = [];
    // v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    v24[1] = 1337;
} catch(v26) {
}
const v27 = v23 + 1;
// v27 = .primitive
v23 = v27;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v1.toString = gc;
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
let v9 = 0;
do {
    const v10 = v9 + 1;
    // v10 = .primitive
    v9 = v10;
} while (v9 < 4096);
const v12 = Object();
// v12 = .object()
let v15 = 0;
const v16 = v12[v1];
// v16 = .unknown
const v17 = v15 + 1;
// v17 = .primitive
v15 = v17;
}
%NeverOptimizeFunction(main);
main();

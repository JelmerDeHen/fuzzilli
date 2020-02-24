function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v3 = 0;
const v5 = v3 + 1;
// v5 = .primitive
v3 = v5;
const v6 = v0.__proto__;
// v6 = .object()
v6[2579677415] = v6;
const v8 = [1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v9 = v8;
let v11 = undefined;
for (const v13 in "boolean") {
    let v16 = 0;
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
    const v21 = v16 + 1;
    // v21 = .primitive
    v16 = v21;
}
}
%NeverOptimizeFunction(main);
main();

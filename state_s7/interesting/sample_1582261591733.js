function main() {
let v2 = 0;
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v6 = v5;
let v8 = undefined;
try {
    const v11 = Object.defineProperty(Math,"d",7);
    // v11 = .undefined
} catch(v12) {
}
const v13 = v2 + 1;
// v13 = .primitive
v2 = v13;
}
%NeverOptimizeFunction(main);
main();

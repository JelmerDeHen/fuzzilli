function main() {
let v2 = 0;
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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

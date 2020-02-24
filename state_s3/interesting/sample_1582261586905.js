function main() {
let v2 = 0;
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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

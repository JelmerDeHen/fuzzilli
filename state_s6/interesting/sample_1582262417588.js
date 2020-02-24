function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v11 = {constructor:"symbol",length:9007199254740993};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
try {
    const v13 = Function(10,v11);
    // v13 = .unknown
} catch(v14) {
}
const v16 = v8 + 1;
// v16 = .primitive
v8 = v16;
}
%NeverOptimizeFunction(main);
main();

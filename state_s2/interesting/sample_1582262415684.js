function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v11 = {constructor:"symbol",length:9007199254740993};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
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

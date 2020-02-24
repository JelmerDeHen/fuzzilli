function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v3 = v2;
const v6 = {constructor:"boolean",length:9007199254740993};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
v2.toString = Symbol;
try {
    const v8 = Function(v3,v6);
    // v8 = .unknown
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();

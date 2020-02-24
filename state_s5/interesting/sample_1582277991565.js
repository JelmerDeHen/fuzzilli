function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v3 = v2;
const v6 = {constructor:"boolean",length:9007199254740993};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
v2.toString = Symbol;
try {
    const v8 = Function(v3,v6);
    // v8 = .unknown
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();

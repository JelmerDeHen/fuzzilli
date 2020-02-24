function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v3 = v2;
const v6 = {constructor:"boolean",length:9007199254740993};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
v2.toString = Symbol;
try {
    const v8 = Function(v3,v6);
    // v8 = .unknown
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();

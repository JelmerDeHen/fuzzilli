function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {call:1337,preventExtensions:4294967295,getPrototypeOf:"caller",defineProperty:v3,get:v3};
// v5 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "call", "preventExtensions", "defineProperty", "get", "__proto__"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
try {
    v7.length = -65535;
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();

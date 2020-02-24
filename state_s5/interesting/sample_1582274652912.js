function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {call:1337,preventExtensions:4294967295,getPrototypeOf:"caller",defineProperty:v3,get:v3};
// v5 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "get", "call", "__proto__", "defineProperty", "preventExtensions"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
try {
    v7.length = -65535;
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();

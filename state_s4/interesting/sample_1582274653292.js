function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {call:1337,preventExtensions:4294967295,getPrototypeOf:"caller",defineProperty:v3,get:v3};
// v5 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "defineProperty", "call", "get", "preventExtensions", "__proto__"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
try {
    v7.length = -65535;
} catch(v9) {
}
}
%NeverOptimizeFunction(main);
main();

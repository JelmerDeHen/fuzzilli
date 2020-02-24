function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {call:1337,preventExtensions:4294967295,getPrototypeOf:"caller",defineProperty:v3,c:v3};
// v5 = .object(ofGroup: Object, withProperties: ["c", "getPrototypeOf", "__proto__", "preventExtensions", "call", "defineProperty"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
try {
    for (const v8 in v7) {
    }
} catch(v9) {
}
let v12 = 0;
let v15 = 0;
let v18 = 0;
const v19 = v15 + 1;
// v19 = .primitive
v15 = v19;
const v20 = v12 + 1;
// v20 = .primitive
v12 = v20;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {call:1337,preventExtensions:4294967295,getPrototypeOf:"caller",defineProperty:v3,c:v3};
// v5 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "defineProperty", "__proto__", "call", "c", "preventExtensions"])
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

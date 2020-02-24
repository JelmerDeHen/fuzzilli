function main() {
const v3 = {d:"e",e:"e",toString:Infinity,b:257};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "b", "toString"])
let v4 = Infinity;
const v7 = new Uint8ClampedArray(0);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
const v9 = [1337,1337,v4,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
const v13 = JSON.stringify(v3,JSON,2153514987);
// v13 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v14 = JSON.parse(v13,v10);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = {d:"e",e:"e",toString:Infinity,b:257};
// v3 = .object(ofGroup: Object, withProperties: ["e", "b", "d", "toString", "__proto__"])
let v4 = Infinity;
const v7 = new Uint8ClampedArray(0);
// v7 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
const v9 = [1337,1337,v4,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v13 = JSON.stringify(v3,JSON,2153514987);
// v13 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v14 = JSON.parse(v13,v10);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

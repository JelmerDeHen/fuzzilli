function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {length:1337,d:parseInt,b:"boolean",valueOf:v4,a:v4,e:13.37,__proto__:v4,c:v4};
// v5 = .object(ofGroup: Object, withProperties: ["b", "length", "e", "c", "a", "__proto__", "valueOf"], withMethods: ["d"])
let v6 = v5;
const v8 = new Int16Array(v6);
// v8 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
const v10 = new Uint8Array(v8);
// v10 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
}
%NeverOptimizeFunction(main);
main();

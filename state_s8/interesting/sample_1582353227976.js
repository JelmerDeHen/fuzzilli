function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {length:145076553,b:v4,toString:145076553,d:v2,e:v2,a:13.37,__proto__:145076553};
// v5 = .object(ofGroup: Object, withProperties: ["b", "a", "toString", "length", "e", "__proto__", "d"])
let v6 = v5;
let v8 = undefined;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v18 = [-2894130274,"split",v17,"split"];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v21 = new Float32Array(v18);
// v21 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteLength", "byteOffset"], withMethods: ["sort", "some", "indexOf", "find", "subarray", "set", "reverse", "reduce", "join", "values", "keys", "entries", "map", "copyWithin", "includes", "findIndex", "slice", "reduceRight", "lastIndexOf", "filter", "every", "fill", "forEach"])
v21.constructor = Int16Array;
const v23 = v21.slice(v21,1337);
// v23 = .object(ofGroup: Float32Array, withProperties: ["buffer", "byteLength", "constructor", "byteOffset", "length", "__proto__"], withMethods: ["set", "entries", "reduce", "lastIndexOf", "map", "join", "values", "sort", "some", "includes", "keys", "reverse", "find", "filter", "every", "copyWithin", "fill", "findIndex", "forEach", "subarray", "reduceRight", "indexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {length:145076553,b:v4,toString:145076553,d:v2,e:v2,a:13.37,__proto__:145076553};
// v5 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b", "toString", "e", "d", "length"])
let v6 = v5;
let v8 = undefined;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v18 = [-2894130274,"split",v17,"split"];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v21 = new Float32Array(v18);
// v21 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
v21.constructor = Int16Array;
const v23 = v21.slice(v21,1337);
// v23 = .object(ofGroup: Float32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "buffer", "byteOffset"], withMethods: ["entries", "join", "includes", "reduce", "filter", "fill", "every", "lastIndexOf", "indexOf", "values", "some", "slice", "copyWithin", "reduceRight", "forEach", "map", "keys", "set", "reverse", "sort", "find", "subarray", "findIndex"])
}
%NeverOptimizeFunction(main);
main();

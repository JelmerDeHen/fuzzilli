function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {length:145076553,b:v4,toString:145076553,d:v2,e:v2,a:13.37,__proto__:145076553};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "length", "a", "d", "b", "e"])
let v6 = v5;
let v8 = undefined;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v18 = [-2894130274,"split",v17,"split"];
// v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v21 = new Float32Array(v18);
// v21 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
v21.constructor = Int16Array;
const v23 = v21.slice(v21,1337);
// v23 = .object(ofGroup: Float32Array, withProperties: ["length", "byteOffset", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["subarray", "slice", "findIndex", "reverse", "sort", "includes", "some", "values", "indexOf", "every", "fill", "map", "set", "copyWithin", "keys", "forEach", "reduce", "entries", "reduceRight", "lastIndexOf", "find", "join", "filter"])
}
%NeverOptimizeFunction(main);
main();

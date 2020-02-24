function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {c:v7,b:"valueOf",a:v7,e:"valueOf",toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a", "toString", "e", "b"])
const v9 = {c:v8,e:v8,b:1337,__proto__:v6,d:Set};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "d", "c", "e"])
const v10 = 13.37 && 13.37;
// v10 = .boolean
v6[16] = -1;
const v11 = new Set(v9);
// v11 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["add", "clear", "delete", "entries", "has", "forEach", "keys", "values"])
const v14 = new Uint32Array(50325);
// v14 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
let v17 = 0;
let v20 = 0;
let v21 = v4;
const v22 = v20 + 1;
// v22 = .primitive
v20 = v22;
const v23 = v17 + 1;
// v23 = .primitive
v17 = v23;
}
%NeverOptimizeFunction(main);
main();

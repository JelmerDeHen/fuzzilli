function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {c:v7,b:"valueOf",a:v7,e:"valueOf",toString:v7};
// v8 = .object(ofGroup: Object, withProperties: ["a", "toString", "__proto__", "c", "e", "b"])
const v9 = {c:v8,e:v8,b:1337,__proto__:v6,d:Set};
// v9 = .object(ofGroup: Object, withProperties: ["c", "e", "__proto__", "d", "b"])
const v10 = 13.37 && 13.37;
// v10 = .boolean
v6[16] = -1;
const v11 = new Set(v9);
// v11 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "add", "forEach", "has", "clear", "keys", "values", "entries"])
const v14 = new Uint32Array(50325);
// v14 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
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

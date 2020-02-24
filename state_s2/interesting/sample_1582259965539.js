function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {d:v7,c:v8,__proto__:"isConcatSpreadable",length:"isConcatSpreadable",toString:RegExp};
// v9 = .object(ofGroup: Object, withProperties: ["d", "length", "c", "__proto__"], withMethods: ["toString"])
let v10 = v9;
const v13 = new Uint8ClampedArray(61670);
// v13 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
const v24 = v13.fill(-2,8);
// v24 = .undefined
let v25 = 0;
const v26 = v7.reverse();
// v26 = .undefined
v10 = v8;
v8[v13] = 8;
const v27 = v4.lastIndexOf(v26,0);
// v27 = .integer
const v28 = RegExp("isConcatSpreadable");
// v28 = .object()
}
%NeverOptimizeFunction(main);
main();

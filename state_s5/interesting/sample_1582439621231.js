function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v6,13.37,1337,String];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {a:"Oj9ZMTdVjw",__proto__:1337,toString:"Oj9ZMTdVjw",length:v7,d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["d", "a", "toString", "__proto__", "length"])
const v9 = {b:String,c:String,constructor:1073741824,toString:1073741824,__proto__:v8,a:v8,d:1337};
// v9 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "a", "toString"], withMethods: ["c", "b"])
let v10 = String;
const v15 = new Uint8ClampedArray(1337);
// v15 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
v15.constructor = Uint32Array;
const v18 = v15.slice(5,234126503);
// v18 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["join", "copyWithin", "find", "fill", "forEach", "map", "subarray", "values", "entries", "every", "set", "reverse", "sort", "some", "reduceRight", "keys", "slice", "filter", "reduce", "indexOf", "includes", "findIndex", "lastIndexOf"])
Object[1337] = Object;
const v22 = Object.seal(Object);
// v22 = .object()
const v23 = Object.freeze(Object);
// v23 = .undefined
}
%NeverOptimizeFunction(main);
main();

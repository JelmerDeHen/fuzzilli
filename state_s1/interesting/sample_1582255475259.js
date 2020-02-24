function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v6 = {has:gc,call:gc};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "call"])
const v8 = new Uint8ClampedArray(gc,v6);
// v8 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v18 = [13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v19 = [13.37,v18];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v20 = gc();
// v20 = .undefined
const v21 = gc(...v14,...v19);
// v21 = .undefined
}
%NeverOptimizeFunction(main);
main();

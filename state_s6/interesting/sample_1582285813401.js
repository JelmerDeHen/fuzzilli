function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {length:v1};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v6 = {constructor:13.37,length:13.37,__proto__:v5,toString:Number,a:"N0Xx92zvHQ"};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "length"], withMethods: ["toString"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = v8.__proto__;
// v9 = .object()
v9[128] = v6;
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = [v11,13.37,13.37];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v16 = {length:1337,toString:v14,__proto__:v8};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "length"])
let v17 = 1337;
let v20 = "qHZ9xy0D+R";
const v21 = v17[v20];
// v21 = .unknown
const v22 = new Float32Array(v16);
// v22 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
const v23 = v22.sort(v21);
// v23 = .undefined
}
%NeverOptimizeFunction(main);
main();

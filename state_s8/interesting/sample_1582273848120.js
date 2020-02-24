function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1337,String,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {e:v4,length:1337,toString:v4};
// v8 = .object(ofGroup: Object, withProperties: ["e", "toString", "__proto__", "length"])
const v9 = {valueOf:v8,a:v7,e:-1073741824,length:String,c:v7};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "a", "e", "c"], withMethods: ["length"])
let v10 = String;
const v19 = new Uint32Array(65537);
// v19 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
const v20 = new Float64Array(v19);
// v20 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
const v21 = "byteLength".substring(-274804284,-274804284);
// v21 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
v21.toString = v21;
v9.__proto__ = Uint32Array;
const v23 = [13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
String.c = 1337;
const v24 = v23[v20];
// v24 = .unknown
const v25 = v20.filter(Object,v23);
// v25 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["map", "subarray", "includes", "copyWithin", "forEach", "reverse", "find", "keys", "every", "reduce", "lastIndexOf", "values", "filter", "indexOf", "fill", "some", "reduceRight", "join", "findIndex", "set", "sort", "slice", "entries"])
v23[v20] = v19;
v4[5] = v25;
const v33 = v20 - 1337;
// v33 = .number
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = [-128,v2,v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = {valueOf:v2,constructor:-128,length:-128};
// v6 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "length"])
const v7 = {b:1337,__proto__:-128,constructor:v4,length:13.37,toString:v6,d:v4,a:v2};
// v7 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "d", "toString", "__proto__", "b"])
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = [v11,471091797,DataView];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v16 = new Float32Array(61010);
// v16 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
const v17 = {a:1337,e:1337,d:1337,valueOf:v13,...v16,...471091797,...1337};
// v17 = .object(ofGroup: Object, withProperties: ["byteLength", "valueOf", "e", "__proto__", "buffer", "byteOffset", "length", "d", "a", "constructor"], withMethods: ["fill", "map", "every", "slice", "entries", "indexOf", "reverse", "forEach", "set", "subarray", "values", "some", "join", "findIndex", "sort", "reduce", "find", "filter", "lastIndexOf", "copyWithin", "keys", "includes", "reduceRight"])
const v19 = !61010;
// v19 = .boolean
const v20 = new Float32Array(471091797);
// v20 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
let v23 = 0;
const v24 = {ownKeys:v7,has:DataView,getOwnPropertyDescriptor:v2,setPrototypeOf:v5,construct:Float32Array};
// v24 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__", "getOwnPropertyDescriptor", "has", "construct", "ownKeys"])
const v26 = v23 + 1;
// v26 = .primitive
v23 = v26;
delete v17[0];
}
%NeverOptimizeFunction(main);
main();

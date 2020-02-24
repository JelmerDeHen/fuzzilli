function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [-128,v2,v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {valueOf:v2,constructor:-128,length:-128};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor", "length"])
const v7 = {b:1337,__proto__:-128,constructor:v4,length:13.37,toString:v6,d:v4,a:v2};
// v7 = .object(ofGroup: Object, withProperties: ["b", "toString", "d", "constructor", "a", "length", "__proto__"])
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = [v11,471091797,DataView];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = new Float32Array(61010);
// v16 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
const v17 = {a:1337,e:1337,d:1337,valueOf:v13,...v16,...471091797,...1337};
// v17 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "valueOf", "d", "byteOffset", "buffer", "constructor", "a", "byteLength"], withMethods: ["sort", "copyWithin", "fill", "findIndex", "find", "subarray", "indexOf", "map", "includes", "values", "slice", "some", "forEach", "reduce", "join", "reduceRight", "reverse", "keys", "filter", "set", "every", "lastIndexOf", "entries"])
const v19 = !61010;
// v19 = .boolean
const v20 = new Float32Array(471091797);
// v20 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
let v23 = 0;
const v24 = {ownKeys:v7,has:DataView,getOwnPropertyDescriptor:v2,setPrototypeOf:v5,construct:Float32Array};
// v24 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "getOwnPropertyDescriptor", "construct", "has", "__proto__", "ownKeys"])
const v26 = v23 + 1;
// v26 = .primitive
v23 = v26;
delete v17[0];
}
%NeverOptimizeFunction(main);
main();

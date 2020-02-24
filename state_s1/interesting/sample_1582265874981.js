function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [-128,v2,v2];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {valueOf:v2,constructor:-128,length:-128};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "constructor"])
const v7 = {b:1337,__proto__:-128,constructor:v4,length:13.37,toString:v6,d:v4,a:v2};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "b", "length", "d", "toString", "a", "__proto__"])
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = [v11,471091797,DataView];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v16 = new Float32Array(61010);
// v16 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
const v17 = {a:1337,e:1337,d:1337,valueOf:v13,...v16,...471091797,...1337};
// v17 = .object(ofGroup: Object, withProperties: ["buffer", "constructor", "byteLength", "d", "a", "byteOffset", "length", "valueOf", "__proto__", "e"], withMethods: ["slice", "findIndex", "reduceRight", "some", "fill", "indexOf", "every", "join", "values", "reduce", "reverse", "entries", "map", "find", "filter", "forEach", "subarray", "keys", "includes", "lastIndexOf", "sort", "set", "copyWithin"])
const v19 = !61010;
// v19 = .boolean
const v20 = new Float32Array(471091797);
// v20 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
let v23 = 0;
const v24 = {ownKeys:v7,has:DataView,getOwnPropertyDescriptor:v2,setPrototypeOf:v5,construct:Float32Array};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "construct", "getOwnPropertyDescriptor", "has", "setPrototypeOf", "ownKeys"])
const v26 = v23 + 1;
// v26 = .primitive
v23 = v26;
delete v17[0];
}
%NeverOptimizeFunction(main);
main();

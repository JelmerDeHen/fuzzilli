function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [-128,v2,v2];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {valueOf:v2,constructor:-128,length:-128};
// v6 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "valueOf"])
const v7 = {b:1337,__proto__:-128,constructor:v4,length:13.37,toString:v6,d:v4,a:v2};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "b", "a", "length", "toString"])
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v13 = [v11,471091797,DataView];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v16 = new Float32Array(61010);
// v16 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
const v17 = {a:1337,e:1337,d:1337,valueOf:v13,...v16,...471091797,...1337};
// v17 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "d", "byteOffset", "e", "__proto__", "byteLength", "length", "buffer", "constructor"], withMethods: ["sort", "reduceRight", "join", "includes", "some", "reduce", "subarray", "find", "reverse", "filter", "fill", "values", "keys", "set", "lastIndexOf", "forEach", "slice", "copyWithin", "indexOf", "findIndex", "entries", "map", "every"])
const v19 = !61010;
// v19 = .boolean
const v20 = new Float32Array(471091797);
// v20 = .object(ofGroup: Float32Array, withProperties: ["length", "constructor", "buffer", "__proto__", "byteLength", "byteOffset"], withMethods: ["slice", "some", "findIndex", "reduce", "copyWithin", "reverse", "find", "sort", "indexOf", "filter", "keys", "map", "every", "reduceRight", "lastIndexOf", "fill", "set", "forEach", "subarray", "entries", "values", "includes", "join"])
let v23 = 0;
const v24 = {ownKeys:v7,has:DataView,getOwnPropertyDescriptor:v2,setPrototypeOf:v5,construct:Float32Array};
// v24 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "has", "getOwnPropertyDescriptor", "ownKeys", "__proto__", "construct"])
const v26 = v23 + 1;
// v26 = .primitive
v23 = v26;
delete v17[0];
}
%NeverOptimizeFunction(main);
main();

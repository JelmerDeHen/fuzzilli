function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [-128,v2,v2];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {valueOf:v2,constructor:-128,length:-128};
// v6 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__", "constructor"])
const v7 = {b:1337,__proto__:-128,constructor:v4,length:13.37,toString:v6,d:v4,a:v2};
// v7 = .object(ofGroup: Object, withProperties: ["a", "constructor", "b", "length", "__proto__", "toString", "d"])
const v11 = [13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = [v11,471091797,DataView];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v16 = new Float32Array(61010);
// v16 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
const v17 = {a:1337,e:1337,d:1337,valueOf:v13,...v16,...471091797,...1337};
// v17 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "buffer", "d", "valueOf", "a", "byteOffset", "e", "byteLength", "length"], withMethods: ["indexOf", "entries", "reduceRight", "filter", "fill", "find", "slice", "includes", "lastIndexOf", "values", "keys", "sort", "subarray", "map", "set", "forEach", "reduce", "copyWithin", "join", "some", "every", "findIndex", "reverse"])
const v19 = !61010;
// v19 = .boolean
const v20 = new Float32Array(471091797);
// v20 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "length", "constructor", "buffer", "__proto__"], withMethods: ["slice", "entries", "some", "set", "indexOf", "join", "includes", "map", "lastIndexOf", "keys", "forEach", "reduce", "fill", "findIndex", "reduceRight", "find", "subarray", "copyWithin", "reverse", "sort", "filter", "every", "values"])
let v23 = 0;
const v24 = {ownKeys:v7,has:DataView,getOwnPropertyDescriptor:v2,setPrototypeOf:v5,construct:Float32Array};
// v24 = .object(ofGroup: Object, withProperties: ["has", "__proto__", "setPrototypeOf", "construct", "ownKeys", "getOwnPropertyDescriptor"])
const v26 = v23 + 1;
// v26 = .primitive
v23 = v26;
delete v17[0];
}
%NeverOptimizeFunction(main);
main();

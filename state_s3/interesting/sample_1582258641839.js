function main() {
let v6 = 0;
const v10 = new Int16Array(19873);
// v10 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v15 = {b:13.37,d:1607264097,e:1607264097,constructor:v14,valueOf:WeakSet};
// v15 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "d", "constructor", "b"])
const v20 = [1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v21 = {b:13.37,d:1607264097,e:1607264097,constructor:v20,valueOf:WeakSet};
// v21 = .object(ofGroup: Object, withProperties: ["e", "d", "b", "valueOf", "__proto__", "constructor"])
let v24 = 0;
const v25 = v24 + 1;
// v25 = .primitive
v24 = v25;
let v35 = 0;
const v36 = "N0Xx92zvHQ".__proto__;
// v36 = .object()
const v37 = {set:Number,get:Number};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v39 = Object.setPrototypeOf(v36,Number);
// v39 = .object()
const v40 = gc();
// v40 = .undefined
let v43 = 0;
const v46 = {set:Object,constructor:Object};
// v46 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor", "set"])
}
%NeverOptimizeFunction(main);
main();

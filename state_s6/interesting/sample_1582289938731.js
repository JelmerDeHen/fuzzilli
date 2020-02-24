function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [13.37,"boolean"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {toString:v6,a:Boolean,c:"boolean",e:1337,d:Boolean,__proto__:v7};
// v8 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "toString", "c"], withMethods: ["a", "d"])
const v9 = {constructor:v8,d:13.37,b:1337,__proto__:v8,valueOf:-1848710946};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "constructor", "valueOf", "b"])
let v10 = v4;
const v12 = [13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v15 = {length:13.37,a:gc,length:gc};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length"], withMethods: ["a", "length"])
function v16(v17,v18) {
    return gc;
}
const v19 = v16();
// v19 = .unknown
const v20 = v19();
// v20 = .unknown
const v21 = {defineProperty:v20,get:v20,getOwnPropertyDescriptor:gc,apply:v19,set:v16,preventExtensions:v20,setPrototypeOf:gc,construct:gc};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "get", "preventExtensions", "defineProperty", "apply"], withMethods: ["set", "setPrototypeOf", "getOwnPropertyDescriptor", "construct"])
const v23 = new Proxy(v15,v21);
// v23 = .unknown
const v25 = Object.keys(v23);
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v31 = 0;
const v33 = [1337,1337,1337,1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v34 = [v12,v33];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v38 = [13.37,-215833.7714811623,-215833.7714811623];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v39 = v38.keys();
// v39 = .object()
const v40 = new Float32Array(v39);
// v40 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
const v42 = v40.includes(0,0);
// v42 = .boolean
const v43 = {e:13.37,__proto__:v34,valueOf:13.37};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e"])
}
%NeverOptimizeFunction(main);
main();

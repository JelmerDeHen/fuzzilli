function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,v5,"e",v5];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {b:1337};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v8 = {valueOf:"e",length:1337,a:v5,b:v5,e:1337};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "length", "b", "a"])
try {
    const v11 = {has:-1024,construct:13.37,call:v8,getOwnPropertyDescriptor:Reflect,deleteProperty:v7,ownKeys:v3,get:1337,defineProperty:v6,getPrototypeOf:13.37};
    // v11 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "construct", "defineProperty", "get", "ownKeys", "getPrototypeOf", "call", "__proto__", "has", "deleteProperty"])
    const v13 = new Proxy(1337,v11);
    // v13 = .unknown
} catch(v14) {
    v14[v14] = v14;
}
let v18 = 0;
const v22 = new Int16Array(19873);
// v22 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v26 = new Int16Array(19873);
// v26 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v30 = [1337,1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v31 = {b:13.37,d:1607264097,e:1607264097,constructor:v30,valueOf:WeakSet};
// v31 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "b", "constructor", "d"])
let v36 = 0;
let v39 = 0;
const v41 = [1337,1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v42 = {b:13.37,d:1607264097,e:1607264097,constructor:v41,valueOf:WeakSet};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "b", "constructor", "d", "valueOf"])
}
%NeverOptimizeFunction(main);
main();

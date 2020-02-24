function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v4,13.37,v6,-4294967296];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {__proto__:v4,valueOf:"number",a:Object,d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d"], withMethods: ["a"])
const v10 = [257];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v11 = v10;
let v13 = undefined;
const v19 = new Int16Array(19873);
// v19 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
try {
    const v23 = [13.37,13.37];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v24 = v8[1024];
    // v24 = .unknown
    const v25 = {has:Int16Array,construct:v24,defineProperty:v24,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v24,isExtensible:v24,call:v24,set:1,getOwnPropertyDescriptor:Int16Array};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "set", "construct", "has", "defineProperty", "setPrototypeOf", "call", "isExtensible", "getOwnPropertyDescriptor", "deleteProperty"])
    const v27 = new Proxy(v23,v25);
    // v27 = .unknown
    const v28 = {c:v24,e:Proxy,__proto__:v24,toString:v25,...undefined,...v27,...v19};
    // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "byteOffset", "byteLength", "buffer", "constructor", "e", "toString", "length"], withMethods: ["subarray", "map", "some", "entries", "copyWithin", "includes", "lastIndexOf", "reduceRight", "keys", "fill", "findIndex", "join", "values", "filter", "set", "every", "forEach", "slice", "reduce", "sort", "find", "indexOf", "reverse"])
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();

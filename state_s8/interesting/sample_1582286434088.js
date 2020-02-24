function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v4,13.37,v6,-4294967296];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {__proto__:v4,valueOf:"number",a:Object,d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "valueOf"], withMethods: ["a"])
const v10 = [257];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v11 = v10;
let v13 = undefined;
const v19 = new Int16Array(19873);
// v19 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
try {
    const v23 = [13.37,13.37];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v24 = v8[1024];
    // v24 = .unknown
    const v25 = {has:Int16Array,construct:v24,defineProperty:v24,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v24,isExtensible:v24,call:v24,set:1,getOwnPropertyDescriptor:Int16Array};
    // v25 = .object(ofGroup: Object, withProperties: ["call", "deleteProperty", "__proto__", "construct", "isExtensible", "preventExtensions", "getOwnPropertyDescriptor", "setPrototypeOf", "defineProperty", "has", "set"])
    const v27 = new Proxy(v23,v25);
    // v27 = .unknown
    const v28 = {c:v24,e:Proxy,__proto__:v24,toString:v25,...undefined,...v27,...v19};
    // v28 = .object(ofGroup: Object, withProperties: ["e", "c", "toString", "byteOffset", "buffer", "__proto__", "length", "constructor", "byteLength"], withMethods: ["indexOf", "forEach", "subarray", "keys", "values", "set", "findIndex", "fill", "entries", "reduceRight", "find", "map", "slice", "filter", "reverse", "lastIndexOf", "some", "sort", "reduce", "copyWithin", "join", "every", "includes"])
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();

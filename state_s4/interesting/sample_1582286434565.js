function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [v4,13.37,v6,-4294967296];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {__proto__:v4,valueOf:"number",a:Object,d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d"], withMethods: ["a"])
const v10 = [257];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v11 = v10;
let v13 = undefined;
const v19 = new Int16Array(19873);
// v19 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
try {
    const v23 = [13.37,13.37];
    // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v24 = v8[1024];
    // v24 = .unknown
    const v25 = {has:Int16Array,construct:v24,defineProperty:v24,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v24,isExtensible:v24,call:v24,set:1,getOwnPropertyDescriptor:Int16Array};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions", "construct", "has", "set", "call", "defineProperty", "setPrototypeOf", "deleteProperty", "isExtensible", "getOwnPropertyDescriptor"])
    const v27 = new Proxy(v23,v25);
    // v27 = .unknown
    const v28 = {c:v24,e:Proxy,__proto__:v24,toString:v25,...undefined,...v27,...v19};
    // v28 = .object(ofGroup: Object, withProperties: ["buffer", "c", "constructor", "toString", "byteLength", "byteOffset", "__proto__", "e", "length"], withMethods: ["copyWithin", "subarray", "filter", "entries", "some", "reduceRight", "find", "fill", "includes", "reverse", "every", "forEach", "findIndex", "indexOf", "reduce", "values", "keys", "lastIndexOf", "slice", "join", "map", "sort", "set"])
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();

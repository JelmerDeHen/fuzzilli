function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v4,13.37,v6,-4294967296];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {__proto__:v4,valueOf:"number",a:Object,d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "d"], withMethods: ["a"])
const v10 = [257];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v11 = v10;
let v13 = undefined;
const v19 = new Int16Array(19873);
// v19 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
try {
    const v23 = [13.37,13.37];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v24 = v8[1024];
    // v24 = .unknown
    const v25 = {has:Int16Array,construct:v24,defineProperty:v24,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v24,isExtensible:v24,call:v24,set:1,getOwnPropertyDescriptor:Int16Array};
    // v25 = .object(ofGroup: Object, withProperties: ["set", "setPrototypeOf", "__proto__", "has", "construct", "deleteProperty", "call", "defineProperty", "getOwnPropertyDescriptor", "preventExtensions", "isExtensible"])
    const v27 = new Proxy(v23,v25);
    // v27 = .unknown
    const v28 = {c:v24,e:Proxy,__proto__:v24,toString:v25,...undefined,...v27,...v19};
    // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "buffer", "byteLength", "constructor", "toString", "length", "byteOffset", "c", "e"], withMethods: ["indexOf", "reverse", "every", "map", "includes", "entries", "fill", "copyWithin", "reduceRight", "forEach", "lastIndexOf", "set", "sort", "findIndex", "some", "find", "values", "subarray", "reduce", "filter", "slice", "join", "keys"])
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();

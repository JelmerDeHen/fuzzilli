function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [v4,13.37,v6,-4294967296];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {__proto__:v4,valueOf:"number",a:Object,d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf"], withMethods: ["a"])
const v10 = [257];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v11 = v10;
let v13 = undefined;
const v19 = new Int16Array(19873);
// v19 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
try {
    const v23 = [13.37,13.37];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v24 = v8[1024];
    // v24 = .unknown
    const v25 = {has:Int16Array,construct:v24,defineProperty:v24,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v24,isExtensible:v24,call:v24,set:1,getOwnPropertyDescriptor:Int16Array};
    // v25 = .object(ofGroup: Object, withProperties: ["defineProperty", "set", "preventExtensions", "__proto__", "call", "deleteProperty", "isExtensible", "has", "construct", "setPrototypeOf", "getOwnPropertyDescriptor"])
    const v27 = new Proxy(v23,v25);
    // v27 = .unknown
    const v28 = {c:v24,e:Proxy,__proto__:v24,toString:v25,...undefined,...v27,...v19};
    // v28 = .object(ofGroup: Object, withProperties: ["byteOffset", "length", "e", "c", "byteLength", "buffer", "toString", "constructor", "__proto__"], withMethods: ["values", "join", "lastIndexOf", "some", "findIndex", "copyWithin", "keys", "filter", "sort", "reduce", "entries", "find", "set", "reverse", "includes", "reduceRight", "every", "slice", "forEach", "fill", "map", "subarray", "indexOf"])
} catch(v30) {
}
}
%NeverOptimizeFunction(main);
main();

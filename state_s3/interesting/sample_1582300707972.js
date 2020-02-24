function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v1 = {__proto__:v0};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = new Int16Array(6992);
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v6 = v2.__proto__;
// v6 = .object()
v6.__proto__ = v5;
try {
    const v9 = [13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v11 = {has:Array,construct:v10,toString:v10,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Array,getOwnPropertyDescriptor:Array};
    // v11 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "preventExtensions", "construct", "isExtensible", "call"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "deleteProperty", "set", "has"])
    const v13 = new Proxy(v1,v11);
    // v13 = .unknown
    for (const v14 in v13) {
    }
} catch(v15) {
}
}
%NeverOptimizeFunction(main);
main();

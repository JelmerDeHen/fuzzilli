function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = {__proto__:-0.0};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = new Int16Array(6992);
// v5 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
const v6 = v0.__proto__;
// v6 = .object()
v6.__proto__ = v5;
try {
    const v9 = [13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v11 = {has:Array,construct:v10,toString:v10,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Array,getOwnPropertyDescriptor:Array};
    // v11 = .object(ofGroup: Object, withProperties: ["toString", "construct", "call", "preventExtensions", "__proto__", "isExtensible"], withMethods: ["setPrototypeOf", "deleteProperty", "has", "getOwnPropertyDescriptor", "set"])
    const v13 = new Proxy(v9,v11);
    // v13 = .unknown
    for (const v14 in v13) {
    }
} catch(v15) {
}
}
%NeverOptimizeFunction(main);
main();

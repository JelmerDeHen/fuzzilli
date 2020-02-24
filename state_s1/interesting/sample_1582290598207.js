function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v2 = {__proto__:-0.0};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v5 = new Int16Array(6992);
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
const v6 = v0.__proto__;
// v6 = .object()
v6.__proto__ = v5;
try {
    const v9 = [13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v11 = {has:Array,construct:v10,toString:v10,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Array,getOwnPropertyDescriptor:Array};
    // v11 = .object(ofGroup: Object, withProperties: ["construct", "isExtensible", "preventExtensions", "__proto__", "call", "toString"], withMethods: ["set", "getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf", "has"])
    const v13 = new Proxy(v9,v11);
    // v13 = .unknown
    for (const v14 in v13) {
    }
} catch(v15) {
}
}
%NeverOptimizeFunction(main);
main();

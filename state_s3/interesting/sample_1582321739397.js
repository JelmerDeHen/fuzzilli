function main() {
const v2 = 13.37 + "P/u36zOlAO";
// v2 = .primitive
const v5 = new Int16Array(6992);
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
try {
    const v8 = [13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v9 = v8[1024];
    // v9 = .unknown
    const v10 = {has:Array,construct:v9,toString:v9,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v9,isExtensible:v9,call:v9,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["toString", "call", "isExtensible", "__proto__", "construct", "preventExtensions"], withMethods: ["deleteProperty", "getOwnPropertyDescriptor", "set", "setPrototypeOf", "has"])
    const v12 = Proxy(v5,v10);
    // v12 = .unknown
} catch(v13) {
    const v14 = v13.constructor;
    // v14 = .unknown
    const v15 = new v14(v2,v13);
    // v15 = .object()
}
}
%NeverOptimizeFunction(main);
main();

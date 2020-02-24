function main() {
const v2 = 13.37 + "P/u36zOlAO";
// v2 = .primitive
const v5 = new Int16Array(6992);
// v5 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
try {
    const v8 = [13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v9 = v8[1024];
    // v9 = .unknown
    const v10 = {has:Array,construct:v9,toString:v9,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v9,isExtensible:v9,call:v9,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["construct", "isExtensible", "call", "preventExtensions", "toString", "__proto__"], withMethods: ["getOwnPropertyDescriptor", "setPrototypeOf", "set", "has", "deleteProperty"])
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

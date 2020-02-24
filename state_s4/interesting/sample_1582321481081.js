function main() {
const v2 = 13.37 + "P/u36zOlAO";
// v2 = .primitive
const v5 = new Int16Array(6992);
// v5 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
try {
    const v8 = [13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v9 = v8[1024];
    // v9 = .unknown
    const v10 = {has:Array,construct:v9,toString:v9,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v9,isExtensible:v9,call:v9,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "construct", "call", "preventExtensions", "toString", "isExtensible"], withMethods: ["deleteProperty", "set", "getOwnPropertyDescriptor", "setPrototypeOf", "has"])
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

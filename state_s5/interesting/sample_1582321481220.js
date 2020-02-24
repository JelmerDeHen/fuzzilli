function main() {
const v2 = 13.37 + "P/u36zOlAO";
// v2 = .primitive
const v5 = new Int16Array(6992);
// v5 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
try {
    const v8 = [13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v9 = v8[1024];
    // v9 = .unknown
    const v10 = {has:Array,construct:v9,toString:v9,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v9,isExtensible:v9,call:v9,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["isExtensible", "call", "preventExtensions", "__proto__", "toString", "construct"], withMethods: ["getOwnPropertyDescriptor", "deleteProperty", "has", "setPrototypeOf", "set"])
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

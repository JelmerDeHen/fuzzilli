function main() {
const v2 = 13.37 + "P/u36zOlAO";
// v2 = .primitive
const v5 = new Int16Array(6992);
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
try {
    const v8 = [13.37,13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v9 = v8[1024];
    // v9 = .unknown
    const v10 = {has:Array,construct:v9,toString:v9,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v9,isExtensible:v9,call:v9,set:Array,getOwnPropertyDescriptor:Array};
    // v10 = .object(ofGroup: Object, withProperties: ["toString", "call", "__proto__", "preventExtensions", "isExtensible", "construct"], withMethods: ["set", "getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf", "has"])
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

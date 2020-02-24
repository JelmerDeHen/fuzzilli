function main() {
const v2 = new Int16Array(6992);
// v2 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v6 = v5[1024];
    // v6 = .unknown
    const v7 = {has:Array,construct:v6,toString:v6,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Array,getOwnPropertyDescriptor:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["construct", "preventExtensions", "call", "toString", "isExtensible", "__proto__"], withMethods: ["set", "setPrototypeOf", "has", "deleteProperty", "getOwnPropertyDescriptor"])
    const v9 = new Proxy(v2,v7);
    // v9 = .unknown
    for (const v10 in v9) {
    }
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();

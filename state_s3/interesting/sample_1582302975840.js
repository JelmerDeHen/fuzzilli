function main() {
const v2 = new Int16Array(6992);
// v2 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v6 = v5[1024];
    // v6 = .unknown
    const v7 = {has:Array,construct:v6,toString:v6,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Array,getOwnPropertyDescriptor:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["isExtensible", "construct", "preventExtensions", "call", "toString", "__proto__"], withMethods: ["set", "deleteProperty", "setPrototypeOf", "has", "getOwnPropertyDescriptor"])
    const v9 = new Proxy(v2,v7);
    // v9 = .unknown
    for (const v10 in v9) {
    }
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();

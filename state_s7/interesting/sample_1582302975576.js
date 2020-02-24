function main() {
const v2 = new Int16Array(6992);
// v2 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v6 = v5[1024];
    // v6 = .unknown
    const v7 = {has:Array,construct:v6,toString:v6,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Array,getOwnPropertyDescriptor:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["toString", "preventExtensions", "construct", "call", "__proto__", "isExtensible"], withMethods: ["deleteProperty", "has", "set", "getOwnPropertyDescriptor", "setPrototypeOf"])
    const v9 = new Proxy(v2,v7);
    // v9 = .unknown
    for (const v10 in v9) {
    }
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();

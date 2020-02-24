function main() {
const v2 = new Int16Array(6992);
// v2 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v6 = v5[1024];
    // v6 = .unknown
    const v7 = {has:Array,construct:v6,toString:v6,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Array,getOwnPropertyDescriptor:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["call", "toString", "__proto__", "construct", "isExtensible", "preventExtensions"], withMethods: ["deleteProperty", "set", "setPrototypeOf", "has", "getOwnPropertyDescriptor"])
    const v9 = new Proxy(v2,v7);
    // v9 = .unknown
    for (const v10 in v9) {
    }
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();

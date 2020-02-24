function main() {
const v2 = new Int16Array(6992);
// v2 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
try {
    const v5 = [13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v6 = v5[1024];
    // v6 = .unknown
    const v7 = {has:Array,construct:v6,toString:v6,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v6,isExtensible:v6,call:v6,set:Array,getOwnPropertyDescriptor:Array};
    // v7 = .object(ofGroup: Object, withProperties: ["call", "isExtensible", "__proto__", "toString", "preventExtensions", "construct"], withMethods: ["set", "has", "setPrototypeOf", "deleteProperty", "getOwnPropertyDescriptor"])
    const v9 = new Proxy(v2,v7);
    // v9 = .unknown
    for (const v10 in v9) {
    }
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();

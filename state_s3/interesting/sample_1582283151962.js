function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v3 = v2[1024];
    // v3 = .unknown
    const v4 = {has:Array,construct:v3,toString:v3,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v3,isExtensible:v3,call:v3,set:Array,getOwnPropertyDescriptor:Array};
    // v4 = .object(ofGroup: Object, withProperties: ["toString", "call", "construct", "isExtensible", "preventExtensions", "__proto__"], withMethods: ["has", "getOwnPropertyDescriptor", "setPrototypeOf", "deleteProperty", "set"])
    const v6 = new Proxy(v2,v4);
    // v6 = .unknown
    for (const v7 in v6) {
    }
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();

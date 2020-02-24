function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v3 = v2[10000];
    // v3 = .unknown
    const v4 = {has:parseInt,construct:v3,toString:v3,deleteProperty:parseInt,setPrototypeOf:parseInt,preventExtensions:v3,isExtensible:v3,call:v3,set:parseInt,getOwnPropertyDescriptor:parseInt};
    // v4 = .object(ofGroup: Object, withProperties: ["isExtensible", "toString", "__proto__", "call", "construct", "preventExtensions"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "has", "set", "deleteProperty"])
    const v6 = new Proxy(v2,v4);
    // v6 = .unknown
    for (const v7 in v6) {
    }
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();

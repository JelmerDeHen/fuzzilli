function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v3 = v2[10000];
    // v3 = .unknown
    const v4 = {has:parseInt,construct:v3,toString:v3,deleteProperty:parseInt,setPrototypeOf:parseInt,preventExtensions:v3,isExtensible:v3,call:v3,set:parseInt,getOwnPropertyDescriptor:parseInt};
    // v4 = .object(ofGroup: Object, withProperties: ["call", "construct", "isExtensible", "__proto__", "toString", "preventExtensions"], withMethods: ["has", "setPrototypeOf", "deleteProperty", "set", "getOwnPropertyDescriptor"])
    const v6 = new Proxy(v2,v4);
    // v6 = .unknown
    for (const v7 in v6) {
    }
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();

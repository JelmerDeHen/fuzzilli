function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v3 = v2[10000];
    // v3 = .unknown
    const v4 = {has:parseInt,construct:v3,toString:v3,deleteProperty:parseInt,setPrototypeOf:parseInt,preventExtensions:v3,isExtensible:v3,call:v3,set:parseInt,getOwnPropertyDescriptor:parseInt};
    // v4 = .object(ofGroup: Object, withProperties: ["preventExtensions", "construct", "isExtensible", "toString", "__proto__", "call"], withMethods: ["deleteProperty", "has", "setPrototypeOf", "set", "getOwnPropertyDescriptor"])
    const v6 = new Proxy(v2,v4);
    // v6 = .unknown
    for (const v7 in v6) {
    }
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();

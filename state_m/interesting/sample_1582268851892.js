function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v3 = v2[1024];
    // v3 = .unknown
    const v4 = {has:Function,construct:v3,toString:v3,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v3,isExtensible:v3,call:v3,set:Function,getOwnPropertyDescriptor:Function};
    // v4 = .object(ofGroup: Object, withProperties: ["preventExtensions", "getOwnPropertyDescriptor", "construct", "__proto__", "setPrototypeOf", "isExtensible", "set", "deleteProperty", "toString", "has", "call"])
    const v5 = Function(v2,v4);
    // v5 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();

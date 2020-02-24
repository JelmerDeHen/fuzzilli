function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v3 = v2[1024];
    // v3 = .unknown
    const v4 = {has:Function,construct:v3,toString:v3,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v3,isExtensible:v3,call:v3,set:Function,getOwnPropertyDescriptor:Function};
    // v4 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "deleteProperty", "preventExtensions", "has", "setPrototypeOf", "call", "set", "__proto__", "isExtensible", "construct", "toString"])
    const v5 = Function(v2,v4);
    // v5 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();

function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v3 = v2[1024];
    // v3 = .unknown
    const v4 = {has:Array,construct:v3,toString:v3,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v3,isExtensible:v3,call:v3,set:Array,getOwnPropertyDescriptor:Array};
    // v4 = .object(ofGroup: Object, withProperties: ["construct", "__proto__", "toString", "preventExtensions", "call", "isExtensible"], withMethods: ["deleteProperty", "has", "getOwnPropertyDescriptor", "setPrototypeOf", "set"])
    const v6 = new Proxy(v2,v4);
    // v6 = .unknown
    for (const v7 in v6) {
    }
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();

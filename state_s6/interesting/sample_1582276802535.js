function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v3 = v2[1024];
    // v3 = .unknown
    const v4 = {has:Function,construct:v3,toString:v3,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v3,isExtensible:v3,call:v3,set:Function,getOwnPropertyDescriptor:Function};
    // v4 = .object(ofGroup: Object, withProperties: ["construct", "call", "setPrototypeOf", "getOwnPropertyDescriptor", "has", "deleteProperty", "toString", "__proto__", "isExtensible", "set", "preventExtensions"])
    const v6 = new Proxy(v2,v4);
    // v6 = .unknown
    for (const v7 in v6) {
        let v10 = 0;
    }
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();

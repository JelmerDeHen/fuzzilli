function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v3 = v2[1024];
    // v3 = .unknown
    const v4 = {has:Function,construct:v3,toString:v3,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v3,isExtensible:v3,call:v3,set:Function,getOwnPropertyDescriptor:Function};
    // v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "set", "call", "has", "construct", "preventExtensions", "deleteProperty", "isExtensible", "setPrototypeOf", "getOwnPropertyDescriptor"])
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

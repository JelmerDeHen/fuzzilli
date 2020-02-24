function main() {
try {
    const v2 = [13.37,13.37];
    // v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v3 = v2[1024];
    // v3 = .unknown
    const v4 = {has:Function,construct:v3,toString:v3,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v3,isExtensible:v3,call:v3,set:Function,getOwnPropertyDescriptor:Function};
    // v4 = .object(ofGroup: Object, withProperties: ["toString", "construct", "set", "call", "getOwnPropertyDescriptor", "preventExtensions", "deleteProperty", "has", "isExtensible", "__proto__", "setPrototypeOf"])
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

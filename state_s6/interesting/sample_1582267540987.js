function main() {
try {
    const v1 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v4 = [13.37,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v6 = {has:Function,construct:v5,toString:v5,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v5,isExtensible:v5,call:v5,set:Function,getOwnPropertyDescriptor:Function};
    // v6 = .object(ofGroup: Object, withProperties: ["construct", "set", "call", "setPrototypeOf", "has", "toString", "isExtensible", "__proto__", "getOwnPropertyDescriptor", "deleteProperty", "preventExtensions"])
    const v8 = new Proxy(v4,v6);
    // v8 = .unknown
    for (const v10 in "object") {
        v1.__proto__ = v8;
    }
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();

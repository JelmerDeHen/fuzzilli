function main() {
try {
    const v1 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v4 = [13.37,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v6 = {has:Function,construct:v5,toString:v5,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v5,isExtensible:v5,call:v5,set:Function,getOwnPropertyDescriptor:Function};
    // v6 = .object(ofGroup: Object, withProperties: ["isExtensible", "deleteProperty", "has", "preventExtensions", "set", "__proto__", "construct", "getOwnPropertyDescriptor", "toString", "setPrototypeOf", "call"])
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

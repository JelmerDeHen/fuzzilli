function main() {
try {
    const v1 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v4 = [13.37,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v5 = v4[1024];
    // v5 = .unknown
    const v6 = {has:Function,construct:v5,toString:v5,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v5,isExtensible:v5,call:v5,set:Function,getOwnPropertyDescriptor:Function};
    // v6 = .object(ofGroup: Object, withProperties: ["call", "__proto__", "has", "isExtensible", "getOwnPropertyDescriptor", "setPrototypeOf", "preventExtensions", "toString", "construct", "deleteProperty", "set"])
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

function main() {
try {
    const v1 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v4 = [13.37,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v5 = v4[-1748339417];
    // v5 = .unknown
    const v6 = {has:this,construct:v5,defineProperty:v5,deleteProperty:this,setPrototypeOf:this,preventExtensions:v5,isExtensible:v5,call:v5,set:this,getOwnPropertyDescriptor:this};
    // v6 = .object(ofGroup: Object, withProperties: ["preventExtensions", "deleteProperty", "call", "has", "getOwnPropertyDescriptor", "setPrototypeOf", "isExtensible", "construct", "set", "defineProperty", "__proto__"])
    const v8 = new Proxy(v4,v6);
    // v8 = .unknown
    for (const v10 in "symbol") {
        v1.__proto__ = v8;
    }
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();

function main() {
try {
    const v1 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v4 = [13.37,13.37];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v5 = v4[-1748339417];
    // v5 = .unknown
    const v6 = {has:this,construct:v5,defineProperty:v5,deleteProperty:this,setPrototypeOf:this,preventExtensions:v5,isExtensible:v5,call:v5,set:this,getOwnPropertyDescriptor:this};
    // v6 = .object(ofGroup: Object, withProperties: ["preventExtensions", "construct", "getOwnPropertyDescriptor", "call", "setPrototypeOf", "isExtensible", "set", "defineProperty", "__proto__", "has", "deleteProperty"])
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

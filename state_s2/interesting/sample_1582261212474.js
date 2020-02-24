function main() {
let v4 = undefined;
try {
    const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v9 = [13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v11 = {has:RegExp,construct:v10,defineProperty:v10,deleteProperty:RegExp,setPrototypeOf:RegExp,preventExtensions:v10,isExtensible:v10,call:v10,set:RegExp,getOwnPropertyDescriptor:RegExp};
    // v11 = .object(ofGroup: Object, withProperties: ["defineProperty", "isExtensible", "call", "preventExtensions", "__proto__", "construct"], withMethods: ["deleteProperty", "getOwnPropertyDescriptor", "setPrototypeOf", "has", "set"])
    const v13 = new Proxy(v9,v11);
    // v13 = .unknown
    for (const v15 in "object") {
        v6.__proto__ = v13;
    }
} catch(v16) {
}
}
%NeverOptimizeFunction(main);
main();

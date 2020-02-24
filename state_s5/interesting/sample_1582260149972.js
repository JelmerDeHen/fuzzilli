function main() {
let v4 = undefined;
try {
    const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v9 = [13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v11 = {has:Int16Array,construct:v10,defineProperty:v10,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Int16Array,getOwnPropertyDescriptor:Int16Array};
    // v11 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__", "defineProperty", "preventExtensions", "has", "call", "getOwnPropertyDescriptor", "deleteProperty", "construct", "set", "setPrototypeOf"])
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

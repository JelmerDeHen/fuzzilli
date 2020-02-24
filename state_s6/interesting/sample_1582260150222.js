function main() {
let v4 = undefined;
try {
    const v6 = [371375.4036167406,371375.4036167406,371375.4036167406];
    // v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v9 = [13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v10 = v9[1024];
    // v10 = .unknown
    const v11 = {has:Int16Array,construct:v10,defineProperty:v10,deleteProperty:Int16Array,setPrototypeOf:Int16Array,preventExtensions:v10,isExtensible:v10,call:v10,set:Int16Array,getOwnPropertyDescriptor:Int16Array};
    // v11 = .object(ofGroup: Object, withProperties: ["deleteProperty", "preventExtensions", "getOwnPropertyDescriptor", "__proto__", "isExtensible", "call", "construct", "has", "setPrototypeOf", "set", "defineProperty"])
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

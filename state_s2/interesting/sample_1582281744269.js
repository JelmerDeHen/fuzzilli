function main() {
let v4 = undefined;
try {
    const v7 = [13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v8 = v7[1024];
    // v8 = .unknown
    const v9 = {has:JSON,construct:v8,defineProperty:v8,deleteProperty:JSON,setPrototypeOf:JSON,preventExtensions:v8,isExtensible:v8,call:v8,set:JSON,getOwnPropertyDescriptor:JSON};
    // v9 = .object(ofGroup: Object, withProperties: ["deleteProperty", "getOwnPropertyDescriptor", "setPrototypeOf", "has", "call", "preventExtensions", "construct", "__proto__", "defineProperty", "isExtensible", "set"])
    const v11 = new Proxy(v7,v9);
    // v11 = .unknown
    delete v11[558351006];
} catch(v12) {
}
}
%NeverOptimizeFunction(main);
main();

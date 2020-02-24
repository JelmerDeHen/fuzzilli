function main() {
let v4 = undefined;
try {
    const v7 = [13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v8 = v7[1024];
    // v8 = .unknown
    const v9 = {has:JSON,construct:v8,defineProperty:v8,deleteProperty:JSON,setPrototypeOf:JSON,preventExtensions:v8,isExtensible:v8,call:v8,set:JSON,getOwnPropertyDescriptor:JSON};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "defineProperty", "construct", "has", "isExtensible", "getOwnPropertyDescriptor", "set", "preventExtensions", "call", "setPrototypeOf", "deleteProperty"])
    const v11 = new Proxy(v7,v9);
    // v11 = .unknown
    delete v11[558351006];
} catch(v12) {
}
}
%NeverOptimizeFunction(main);
main();

function main() {
let v4 = undefined;
try {
    const v7 = [13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v8 = v7[1024];
    // v8 = .unknown
    const v9 = {has:JSON,construct:v8,defineProperty:v8,deleteProperty:JSON,setPrototypeOf:JSON,preventExtensions:v8,isExtensible:v8,call:v8,set:JSON,getOwnPropertyDescriptor:JSON};
    // v9 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "preventExtensions", "call", "set", "__proto__", "deleteProperty", "isExtensible", "defineProperty", "construct", "getOwnPropertyDescriptor", "has"])
    const v11 = new Proxy(v7,v9);
    // v11 = .unknown
    delete v11[558351006];
} catch(v12) {
}
}
%NeverOptimizeFunction(main);
main();

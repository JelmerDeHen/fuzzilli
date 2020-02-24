function main() {
let v4 = undefined;
try {
    const v7 = [13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v8 = v7[1024];
    // v8 = .unknown
    const v9 = {has:JSON,construct:v8,defineProperty:v8,deleteProperty:JSON,setPrototypeOf:JSON,preventExtensions:v8,isExtensible:v8,call:v8,set:JSON,getOwnPropertyDescriptor:JSON};
    // v9 = .object(ofGroup: Object, withProperties: ["construct", "setPrototypeOf", "preventExtensions", "defineProperty", "__proto__", "deleteProperty", "getOwnPropertyDescriptor", "has", "isExtensible", "call", "set"])
    const v11 = new Proxy(v7,v9);
    // v11 = .unknown
    delete v11[558351006];
} catch(v12) {
}
}
%NeverOptimizeFunction(main);
main();

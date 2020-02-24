function main() {
let v4 = undefined;
try {
    const v7 = [13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v8 = v7[1024];
    // v8 = .unknown
    const v9 = {has:JSON,construct:v8,defineProperty:v8,deleteProperty:JSON,setPrototypeOf:JSON,preventExtensions:v8,isExtensible:v8,call:v8,set:JSON,getOwnPropertyDescriptor:JSON};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "has", "isExtensible", "getOwnPropertyDescriptor", "call", "deleteProperty", "set", "setPrototypeOf", "construct", "preventExtensions", "defineProperty"])
    const v11 = new Proxy(v7,v9);
    // v11 = .unknown
    delete v11[558351006];
} catch(v12) {
}
}
%NeverOptimizeFunction(main);
main();

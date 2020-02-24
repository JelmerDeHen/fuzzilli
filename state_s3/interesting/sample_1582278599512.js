function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {toString:"symbol",a:1337,__proto__:13.37,b:"symbol",valueOf:v3};
// v5 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "a", "__proto__", "toString"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
try {
    const v8 = v5.__proto__;
    // v8 = .object()
    const v10 = {setPrototypeOf:isNaN,has:RegExp,call:RegExp,construct:isNaN,get:RegExp,ownKeys:isNaN,preventExtensions:Symbol,apply:isNaN,deleteProperty:Symbol,getOwnPropertyDescriptor:Symbol,isExtensible:RegExp};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "isExtensible", "has", "construct", "deleteProperty", "get", "call", "setPrototypeOf", "apply", "ownKeys", "getOwnPropertyDescriptor"])
    const v12 = new Proxy(v8,v10);
    // v12 = .unknown
    v12.toString = v6;
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();

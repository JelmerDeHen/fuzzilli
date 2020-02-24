function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {toString:"symbol",a:1337,__proto__:13.37,b:"symbol",valueOf:v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "valueOf", "a", "toString"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
try {
    const v8 = v5.__proto__;
    // v8 = .object()
    const v10 = {setPrototypeOf:isNaN,has:RegExp,call:RegExp,construct:isNaN,get:RegExp,ownKeys:isNaN,preventExtensions:Symbol,apply:isNaN,deleteProperty:Symbol,getOwnPropertyDescriptor:Symbol,isExtensible:RegExp};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "get", "apply", "getOwnPropertyDescriptor", "deleteProperty", "construct", "has", "setPrototypeOf", "ownKeys", "preventExtensions", "isExtensible"])
    const v12 = new Proxy(v8,v10);
    // v12 = .unknown
    v12.toString = v6;
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();

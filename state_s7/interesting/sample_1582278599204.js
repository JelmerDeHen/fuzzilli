function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {toString:"symbol",a:1337,__proto__:13.37,b:"symbol",valueOf:v3};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "b", "valueOf", "__proto__", "a"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
try {
    const v8 = v5.__proto__;
    // v8 = .object()
    const v10 = {setPrototypeOf:isNaN,has:RegExp,call:RegExp,construct:isNaN,get:RegExp,ownKeys:isNaN,preventExtensions:Symbol,apply:isNaN,deleteProperty:Symbol,getOwnPropertyDescriptor:Symbol,isExtensible:RegExp};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "deleteProperty", "preventExtensions", "get", "apply", "isExtensible", "setPrototypeOf", "call", "has", "ownKeys", "construct"])
    const v12 = new Proxy(v8,v10);
    // v12 = .unknown
    v12.toString = v6;
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();

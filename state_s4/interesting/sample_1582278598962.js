function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {toString:"symbol",a:1337,__proto__:13.37,b:"symbol",valueOf:v3};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "valueOf", "a", "b"])
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
try {
    const v8 = v5.__proto__;
    // v8 = .object()
    const v10 = {setPrototypeOf:isNaN,has:RegExp,call:RegExp,construct:isNaN,get:RegExp,ownKeys:isNaN,preventExtensions:Symbol,apply:isNaN,deleteProperty:Symbol,getOwnPropertyDescriptor:Symbol,isExtensible:RegExp};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "setPrototypeOf", "call", "getOwnPropertyDescriptor", "deleteProperty", "isExtensible", "has", "construct", "apply", "ownKeys", "preventExtensions"])
    const v12 = new Proxy(v8,v10);
    // v12 = .unknown
    v12.toString = v6;
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();

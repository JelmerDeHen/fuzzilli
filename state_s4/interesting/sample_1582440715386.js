function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = {__proto__:DataView,e:"boolean",a:"boolean",toString:"boolean"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "e", "a"])
const v8 = {toString:v7,valueOf:v6,e:DataView};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "toString"])
let v9 = v7;
const v10 = {getOwnPropertyDescriptor:1337,getPrototypeOf:v5,apply:13.37,construct:v5,preventExtensions:v8,isExtensible:"boolean",ownKeys:v9,setPrototypeOf:-268435456,deleteProperty:v5};
// v10 = .object(ofGroup: Object, withProperties: ["construct", "isExtensible", "ownKeys", "preventExtensions", "setPrototypeOf", "getPrototypeOf", "getOwnPropertyDescriptor", "deleteProperty", "apply", "__proto__"])
const v12 = new Proxy(v6,v10);
// v12 = .unknown
try {
    v12.__proto__ = v7;
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {__proto__:DataView,e:"boolean",a:"boolean",toString:"boolean"};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "a", "__proto__", "e"])
const v8 = {toString:v7,valueOf:v6,e:DataView};
// v8 = .object(ofGroup: Object, withProperties: ["e", "toString", "valueOf", "__proto__"])
let v9 = v7;
const v10 = {getOwnPropertyDescriptor:1337,getPrototypeOf:v5,apply:13.37,construct:v5,preventExtensions:v8,isExtensible:"boolean",ownKeys:v9,setPrototypeOf:-268435456,deleteProperty:v5};
// v10 = .object(ofGroup: Object, withProperties: ["deleteProperty", "isExtensible", "getOwnPropertyDescriptor", "setPrototypeOf", "preventExtensions", "ownKeys", "construct", "apply", "__proto__", "getPrototypeOf"])
const v12 = new Proxy(v6,v10);
// v12 = .unknown
try {
    v12.__proto__ = v7;
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();

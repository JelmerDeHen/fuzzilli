function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {__proto__:DataView,e:"boolean",a:"boolean",toString:"boolean"};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "a", "__proto__", "e"])
const v8 = {toString:v7,valueOf:v6,e:DataView};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "valueOf"])
let v9 = v7;
const v10 = {getOwnPropertyDescriptor:1337,getPrototypeOf:v5,apply:13.37,construct:v5,preventExtensions:v8,isExtensible:"boolean",ownKeys:v9,setPrototypeOf:-268435456,deleteProperty:v5};
// v10 = .object(ofGroup: Object, withProperties: ["apply", "preventExtensions", "isExtensible", "deleteProperty", "setPrototypeOf", "ownKeys", "construct", "__proto__", "getPrototypeOf", "getOwnPropertyDescriptor"])
const v12 = new Proxy(v6,v10);
// v12 = .unknown
try {
    v12.__proto__ = v7;
} catch(v13) {
}
}
%NeverOptimizeFunction(main);
main();

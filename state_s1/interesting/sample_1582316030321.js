function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {valueOf:Int32Array,length:13.37,e:13.37,toString:v4,constructor:1337};
// v5 = .object(ofGroup: Object, withProperties: ["e", "toString", "__proto__", "valueOf", "length", "constructor"])
const v6 = {valueOf:13.37,length:v4,toString:"boolean",b:Int32Array,a:v4};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "a", "valueOf", "toString"])
const v8 = typeof v6;
// v8 = .string
const v10 = v8 === "number";
// v10 = .boolean
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        v17[3] = v17;
    } catch(v18) {
    }
    v5.__proto__ = v4;
}
const v19 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "get", "isExtensible", "has", "call", "construct", "preventExtensions", "set", "getPrototypeOf", "setPrototypeOf", "deleteProperty"])
const v21 = new Proxy(v12,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

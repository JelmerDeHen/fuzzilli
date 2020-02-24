function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {valueOf:Int32Array,length:13.37,e:13.37,toString:v4,constructor:1337};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "e", "toString", "length", "__proto__"])
const v6 = {valueOf:13.37,length:v4,toString:"boolean",b:Int32Array,a:v4};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "a", "length", "__proto__", "toString"])
const v8 = typeof v6;
// v8 = .string
const v10 = v8 === "number";
// v10 = .boolean
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        v17[3] = v17;
    } catch(v18) {
    }
    v5.__proto__ = v4;
}
const v19 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "preventExtensions", "get", "getPrototypeOf", "construct", "set", "deleteProperty", "ownKeys", "isExtensible", "has", "setPrototypeOf"])
const v21 = new Proxy(v12,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

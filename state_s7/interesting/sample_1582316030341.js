function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {valueOf:Int32Array,length:13.37,e:13.37,toString:v4,constructor:1337};
// v5 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__", "valueOf", "toString", "constructor"])
const v6 = {valueOf:13.37,length:v4,toString:"boolean",b:Int32Array,a:v4};
// v6 = .object(ofGroup: Object, withProperties: ["b", "length", "a", "valueOf", "toString", "__proto__"])
const v8 = typeof v6;
// v8 = .string
const v10 = v8 === "number";
// v10 = .boolean
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        v17[3] = v17;
    } catch(v18) {
    }
    v5.__proto__ = v4;
}
const v19 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "isExtensible", "ownKeys", "has", "call", "setPrototypeOf", "getPrototypeOf", "get", "preventExtensions", "deleteProperty", "set"])
const v21 = new Proxy(v12,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

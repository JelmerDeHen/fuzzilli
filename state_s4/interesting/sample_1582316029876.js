function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {valueOf:Int32Array,length:13.37,e:13.37,toString:v4,constructor:1337};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "constructor", "__proto__", "toString", "length"])
const v6 = {valueOf:13.37,length:v4,toString:"boolean",b:Int32Array,a:v4};
// v6 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "length", "b", "toString"])
const v8 = typeof v6;
// v8 = .string
const v10 = v8 === "number";
// v10 = .boolean
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        v17[3] = v17;
    } catch(v18) {
    }
    v5.__proto__ = v4;
}
const v19 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "ownKeys", "isExtensible", "getPrototypeOf", "get", "deleteProperty", "construct", "preventExtensions", "has", "set", "call"])
const v21 = new Proxy(v12,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

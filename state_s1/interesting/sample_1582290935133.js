function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {length:-2066768110,__proto__:v4,c:1337,valueOf:v7,d:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["length", "c", "__proto__", "d", "valueOf"])
const v9 = {__proto__:13.37,b:"string"};
// v9 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
let v10 = 1337;
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v19 = "function".includes(v18,v17);
        // v19 = .boolean
    } catch(v20) {
    }
    return v15;
}
const v21 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "deleteProperty", "getPrototypeOf", "get", "setPrototypeOf", "preventExtensions", "has", "construct", "call", "set", "ownKeys"])
const v23 = new Proxy(RegExp,v21);
// v23 = .unknown
v23[-2923725353] = "boolean";
const v24 = {apply:v14,deleteProperty:RegExp,has:v23,setPrototypeOf:v23,get:RegExp};
// v24 = .object(ofGroup: Object, withProperties: ["has", "__proto__", "setPrototypeOf"], withMethods: ["deleteProperty", "apply", "get"])
const v26 = new Proxy(v8,v24);
// v26 = .unknown
const v27 = v14();
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();

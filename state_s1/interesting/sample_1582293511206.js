function main() {
let v6 = 0;
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v13(v14,v15,v16,v17) {
    'use strict'
    try {
        const v19 = {};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v20 = v19;
        const v21 = Object.entries(v16);
        // v21 = .object()
        const v26 = [2153514987,1,13.37,13.37,v17];
        // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v28 = [v20,v26,v26];
        // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v29 = {length:13.37,b:v16,valueOf:v26,__proto__:v28};
        // v29 = .object(ofGroup: Object, withProperties: ["length", "b", "__proto__", "valueOf"])
        const v30 = {a:1853908484,toString:v16,constructor:"NEGATIVE_INFINITY",valueOf:v29,b:13.37,c:JSON,e:JSON};
        // v30 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "__proto__", "a", "c", "b", "e", "toString"])
        const v32 = JSON.stringify(v30,Reflect,"name");
        // v32 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    } catch(v33) {
    }
    return 2147483648;
}
const v34 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "isExtensible", "has", "setPrototypeOf", "construct", "set", "getPrototypeOf", "preventExtensions", "deleteProperty", "call", "ownKeys"])
const v36 = new Proxy(v11,v34);
// v36 = .unknown
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

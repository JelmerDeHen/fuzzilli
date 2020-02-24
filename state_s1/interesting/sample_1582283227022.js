function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {length:1337,e:1337,c:v2,a:1337,toString:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "c", "a", "length", "__proto__", "e"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v16 = {};
        // v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v17 = v16;
        const v22 = [2153514987,13.37,13.37,13.37,v14];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v24 = [v17,v22,v22];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v25 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v22,__proto__:v24};
        // v25 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "length"])
        const v26 = {a:1337,toString:v16,constructor:"NEGATIVE_INFINITY",valueOf:v25,b:13.37,c:JSON,e:JSON};
        // v26 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "e", "a", "__proto__", "b", "c", "toString"])
        const v28 = JSON.stringify(v26,Reflect,"name");
        // v28 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    } catch(v29) {
    }
    return v3;
}
const v30 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "isExtensible", "deleteProperty", "has", "setPrototypeOf", "construct", "preventExtensions", "getPrototypeOf", "ownKeys", "get", "call"])
const v32 = new Proxy(v9,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

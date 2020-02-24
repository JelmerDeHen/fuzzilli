function main() {
const v3 = "gcyFsZ7xWv".charAt(1337);
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v8 = eval(v3);
// v8 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v12(v13,v14,v15,v16) {
    'use strict'
    let v19 = 0;
    try {
        const v25 = [];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v26 = {valueOf:v25,length:13.37,d:127,e:127};
        // v26 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length", "d", "e"])
        const v27 = {c:v25,valueOf:v26,d:Array,a:1337};
        // v27 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "valueOf"], withMethods: ["d"])
        length = v27;
        let v30 = 0;
    } catch(v33) {
    }
    const v34 = v19 + 1;
    // v34 = .primitive
    v19 = v34;
}
const v35 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "construct", "set", "get", "deleteProperty", "has", "setPrototypeOf", "getPrototypeOf", "call", "isExtensible", "ownKeys"])
const v37 = new Proxy(v11,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = "gcyFsZ7xWv".charAt(1337);
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v8 = eval(v3);
// v8 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v12(v13,v14,v15,v16) {
    'use strict'
    let v19 = 0;
    try {
        const v25 = [];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v26 = {valueOf:v25,length:13.37,d:127,e:127};
        // v26 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e", "valueOf", "length"])
        const v27 = {c:v25,valueOf:v26,d:Array,a:1337};
        // v27 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "valueOf", "c"], withMethods: ["d"])
        length = v27;
        let v30 = 0;
    } catch(v33) {
    }
    const v34 = v19 + 1;
    // v34 = .primitive
    v19 = v34;
}
const v35 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "get", "preventExtensions", "deleteProperty", "construct", "getPrototypeOf", "ownKeys", "call", "has", "set", "setPrototypeOf"])
const v37 = new Proxy(v11,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

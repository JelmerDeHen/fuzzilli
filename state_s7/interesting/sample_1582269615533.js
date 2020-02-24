function main() {
const v3 = "gcyFsZ7xWv".charAt(1337);
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v8 = eval(v3);
// v8 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v12(v13,v14,v15,v16) {
    'use strict'
    let v19 = 0;
    try {
        const v25 = [];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v26 = {valueOf:v25,length:13.37,d:127,e:127};
        // v26 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "length", "valueOf"])
        const v27 = {c:v25,valueOf:v26,d:Array,a:1337};
        // v27 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "valueOf"], withMethods: ["d"])
        length = v27;
        let v30 = 0;
    } catch(v33) {
    }
    const v34 = v19 + 1;
    // v34 = .primitive
    v19 = v34;
}
const v35 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "isExtensible", "deleteProperty", "ownKeys", "setPrototypeOf", "getPrototypeOf", "get", "construct", "set", "call", "preventExtensions"])
const v37 = new Proxy(v11,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

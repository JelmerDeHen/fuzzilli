function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {length:1337,e:1337,c:v2,a:1337,length:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["a", "c", "e", "length", "__proto__"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        let v10 = v9;
        const v12 = -Infinity;
        // v12 = .float
        const v13 = [v12];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v15 = {constructor:-4294967295,length:1337,__proto__:v13};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
        const v17 = v13.includes(v15,1);
        // v17 = .boolean
        const v18 = v15.toLocaleString(v17,v10);
        // v18 = .unknown
    } catch(v19) {
    }
    return v3;
}
const v20 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "setPrototypeOf", "preventExtensions", "call", "get", "getPrototypeOf", "has", "set", "deleteProperty", "construct", "isExtensible"])
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
const v26 = new Proxy(v3,v20);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

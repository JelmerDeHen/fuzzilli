function main() {
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {length:1337,e:1337,c:v4,a:1337,toString:"symbol"};
// v5 = .object(ofGroup: Object, withProperties: ["a", "toString", "e", "length", "c", "__proto__"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        let v12 = v11;
        const v13 = -Infinity;
        // v13 = .float
        const v14 = [v13];
        // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v16 = {constructor:1337,length:1337,__proto__:v14};
        // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
        const v18 = v14.includes(v16,1);
        // v18 = .boolean
        const v19 = v16.toLocaleString(v18,v12);
        // v19 = .unknown
    } catch(v20) {
    }
    return "boolean";
}
const v21 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "deleteProperty", "setPrototypeOf", "has", "set", "isExtensible", "call", "ownKeys", "getPrototypeOf", "preventExtensions", "construct"])
const v23 = new Proxy(v5,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

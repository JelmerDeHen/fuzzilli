function main() {
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {length:1337,e:1337,c:v5,a:1337,toString:"symbol"};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "length", "a", "c"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        let v13 = v12;
        const v15 = -Infinity;
        // v15 = .float
        const v16 = [v15];
        // v16 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v18 = {constructor:-4294967295,length:1337,__proto__:v16};
        // v18 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
        const v20 = v16.includes(v18,1);
        // v20 = .boolean
        const v21 = v18.toLocaleString(v20,v13);
        // v21 = .unknown
    } catch(v25) {
    }
    return 1337;
}
const v26 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "call", "construct", "getPrototypeOf", "get", "ownKeys", "preventExtensions", "setPrototypeOf", "isExtensible", "set", "has"])
const v28 = new Proxy(v6,v26);
// v28 = .unknown
v28[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

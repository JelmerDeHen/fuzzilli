function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {length:1337,e:1337,c:v2,a:1337,toString:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["e", "length", "c", "__proto__", "a", "toString"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        let v10 = v9;
        const v12 = -Infinity;
        // v12 = .float
        const v13 = [v12];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v15 = {constructor:-4294967295,length:1337,__proto__:v13};
        // v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
        const v17 = v13.includes(v15,1);
        // v17 = .boolean
        const v18 = v15.toLocaleString(v17,v10);
        // v18 = .unknown
        let v21 = 0;
        const v22 = v21 + 1;
        // v22 = .primitive
        v21 = v22;
    } catch(v23) {
    }
    return v3;
}
const v24 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "isExtensible", "setPrototypeOf", "has", "getPrototypeOf", "preventExtensions", "call", "deleteProperty", "ownKeys", "construct", "get"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

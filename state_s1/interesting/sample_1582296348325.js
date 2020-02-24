function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {length:1337,e:1337,c:v2,a:1337,toString:"symbol"};
// v3 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "e", "c", "length", "toString"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        let v10 = v9;
        const v12 = -Infinity;
        // v12 = .float
        const v13 = [v12];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v15 = {constructor:-4294967295,length:1337,__proto__:v13};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
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
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "call", "has", "deleteProperty", "set", "isExtensible", "preventExtensions", "setPrototypeOf", "ownKeys", "construct"])
const v26 = new Proxy(v3,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

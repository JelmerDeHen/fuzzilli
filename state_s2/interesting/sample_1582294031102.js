function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "e"])
const v5 = v3.__proto__;
// v5 = .object()
const v7 = {length:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["length"])
const v9 = Object.defineProperty(v5,"length",v7);
// v9 = .undefined
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v13(v14,v15,v16,v17) {
    'use strict'
    let v20 = 0;
    while (v20 < 1337) {
        const v21 = v20 + 1;
        // v21 = .primitive
        v20 = v21;
    }
    try {
        const v26 = [];
        // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v27 = {a:v26,length:13.37,d:127,e:127};
        // v27 = .object(ofGroup: Object, withProperties: ["e", "length", "d", "__proto__", "a"])
        const v28 = {c:v26,valueOf:v27,d:Array,a:1337};
        // v28 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "a", "__proto__"], withMethods: ["d"])
        length = v28;
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "ownKeys", "setPrototypeOf", "preventExtensions", "deleteProperty", "getPrototypeOf", "call", "get", "construct", "has", "set"])
const v32 = new Proxy(v12,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

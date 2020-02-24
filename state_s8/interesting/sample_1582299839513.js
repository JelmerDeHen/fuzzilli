function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "e", "__proto__"])
const v5 = v3.__proto__;
// v5 = .object()
const v7 = {get:parseFloat};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v9 = Object.defineProperty(v5,"length",v7);
// v9 = .undefined
const v12 = [1337,1337,1337,1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v13(v14,v15,v16,v17) {
    'use strict'
    let v20 = 0;
    const v21 = v20 + 1;
    // v21 = .primitive
    delete v5.constructor;
    v20 = v21;
    try {
        const v26 = [];
        // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v27 = {valueOf:v26,length:13.37,d:127,e:127};
        // v27 = .object(ofGroup: Object, withProperties: ["d", "e", "valueOf", "__proto__", "length"])
        const v28 = {c:v26,valueOf:v27,d:Array,a:1337};
        // v28 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf", "a"], withMethods: ["d"])
        length = v28;
    } catch(v29) {
    }
}
const v30 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "ownKeys", "isExtensible", "preventExtensions", "has", "getPrototypeOf", "deleteProperty", "get", "setPrototypeOf", "call"])
const v32 = new Proxy(v12,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
let v35 = 0;
const v36 = v35 + 1;
// v36 = .primitive
v35 = v36;
}
%NeverOptimizeFunction(main);
main();

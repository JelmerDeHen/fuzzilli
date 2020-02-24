function main() {
const v2 = [13.37,13.37,-4294967296];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v6 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "valueOf", "toString"])
const v7 = v6.__proto__;
// v7 = .object()
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v12(v13,v14,v15,v16) {
    'use strict'
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
    try {
        const v21 = Object(v14);
        // v21 = .object()
        const v22 = {...v16,...v19,...v7,...v21};
        // v22 = .object(ofGroup: Object, withProperties: ["__proto__"])
    } catch(v23) {
    }
}
const v24 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v2,__proto__:v12,setPrototypeOf:v12,has:v12};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["has", "isExtensible", "setPrototypeOf", "call", "preventExtensions", "getPrototypeOf", "construct", "set", "__proto__", "deleteProperty"])
const v26 = new Proxy(v11,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

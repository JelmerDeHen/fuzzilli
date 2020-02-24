function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString", "e"])
const v4 = v3.__proto__;
// v4 = .object()
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v9(v10,v11,v12,v13) {
    'use strict'
    let v16 = 0;
    while (v16 < 1337) {
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
    }
    try {
        const v18 = Object(v11);
        // v18 = .object()
        const v19 = {...v13,...v16,...v4,...v18};
        // v19 = .object(ofGroup: Object, withProperties: ["__proto__"])
    } catch(v20) {
    }
}
const v21 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "getPrototypeOf", "isExtensible", "get", "deleteProperty", "preventExtensions", "ownKeys", "setPrototypeOf", "set", "call", "has"])
const v23 = new Proxy(v8,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

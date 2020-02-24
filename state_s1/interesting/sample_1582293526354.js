function main() {
let v3 = undefined;
const v5 = {__proto__:536870912};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "e"])
const v11 = v9.__proto__;
// v11 = .object()
const v13 = {get:parseFloat};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v15 = Object.defineProperty(v11,"length",v13);
// v15 = .undefined
const v18 = [1337,1337,1337,1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v19(v20,v21,v22,v23) {
    'use strict'
    let v26 = 0;
    while (v26 < 1337) {
        const v27 = v26 + 1;
        // v27 = .primitive
        v26 = v27;
    }
    try {
        const v32 = [];
        // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v33 = {valueOf:v32,length:13.37,d:127,e:127};
        // v33 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__", "valueOf", "d"])
        const v34 = {c:v32,valueOf:v33,d:Array,a:1337};
        // v34 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "c", "__proto__"], withMethods: ["d"])
        length = v34;
    } catch(v35) {
    }
}
const v36 = {deleteProperty:v19,set:v19,getPrototypeOf:v19,call:v19,preventExtensions:v19,isExtensible:v19,construct:v19,get:v19,ownKeys:v19,setPrototypeOf:v19,has:v19};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "deleteProperty", "has", "isExtensible", "call", "get", "construct", "setPrototypeOf", "preventExtensions", "getPrototypeOf", "set"])
const v38 = new Proxy(v18,v36);
// v38 = .unknown
v38[1] = "MIN_VALUE";
v38.b = v36;
}
%NeverOptimizeFunction(main);
main();

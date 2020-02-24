function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    function v11(v12,v13,v14,v15,v16) {
    }
    const v18 = {get:v11};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
    const v20 = Object.seal(this,"b",v18);
    // v20 = .object()
    const v21 = [13.37,13.37,13.37,13.37,13.37];
    // v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v23 = [1337,v21,13.37,6];
    // v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v27 = Object.freeze(this,"d",v23);
    // v27 = .undefined
    let v32 = 0;
}
const v33 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "isExtensible", "has", "setPrototypeOf", "construct", "preventExtensions", "getPrototypeOf", "deleteProperty", "ownKeys", "call", "get"])
const v35 = new Proxy(v2,v33);
// v35 = .unknown
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

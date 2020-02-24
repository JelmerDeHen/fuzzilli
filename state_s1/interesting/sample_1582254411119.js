function main() {
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = {get:Number,set:Number};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v15 = [1337,v10,13.37,1024];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v16 = v15 <= v10;
// v16 = .boolean
let v17 = Number;
const v18 = Number[v17];
// v18 = .unknown
if (v16) {
    function v19(v20,v21,v22,v23) {
        'use strict'
    }
} else {
}
const v28 = {defineProperty:v18,deleteProperty:Number,setPrototypeOf:Number,getPrototypeOf:v18,isExtensible:Object,construct:Object,call:v18,ownKeys:Object,set:Object,get:Object};
// v28 = .object(ofGroup: Object, withProperties: ["defineProperty", "__proto__", "call", "getPrototypeOf"], withMethods: ["setPrototypeOf", "set", "deleteProperty", "construct", "isExtensible", "get", "ownKeys"])
const v30 = new Proxy(v13,v28);
// v30 = .unknown
for (let v33 = 0; v33 < 4; v33++) {
    const v37 = [13.37,13.37];
    // v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v38 = v37[1024];
    // v38 = .unknown
    function v40(v41,v42,v43,v44,v45) {
    }
    const v48 = gc();
    // v48 = .undefined
}
}
%NeverOptimizeFunction(main);
main();

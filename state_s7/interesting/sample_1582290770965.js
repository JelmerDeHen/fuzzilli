function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v11 = 0;
    function v12(v13,v14) {
        let v17 = 0;
        let v19 = v13;
    }
    let v23 = 0;
    while (v23 < 1337) {
        const v24 = v23 + 1;
        // v24 = .primitive
        v23 = v24;
    }
    let v27 = 0;
    try {
        const v32 = [];
        // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v33 = {valueOf:v32,length:13.37,d:127,e:127};
        // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "d", "length"])
        const v34 = {c:v32,valueOf:v33,d:Array,a:1337};
        // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "a", "c"], withMethods: ["d"])
        length = v34;
    } catch(v37) {
    }
    const v38 = v27 + 1;
    // v38 = .primitive
    v27 = v38;
}
const v39 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v39 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "preventExtensions", "set", "has", "getPrototypeOf", "deleteProperty", "call", "get", "ownKeys", "construct", "setPrototypeOf"])
const v41 = new Proxy(v2,v39);
// v41 = .unknown
v41[1] = "MIN_VALUE";
v41.b = v39;
}
%NeverOptimizeFunction(main);
main();

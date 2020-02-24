function main() {
const v6 = {length:1337};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v34 = [1337,1337,1337,1337];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v35 = "object".constructor;
    // v35 = .function()
    let v36 = 1337;
    function v38(v39,v40,v41,v42) {
    }
    const v44 = v38(v36,Object,v35,v34);
    // v44 = .unknown
    const v61 = [1337];
    // v61 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v62 = v61;
    let v65 = undefined;
    let v79 = 0;
    let v81 = 0;
    let v84 = 0;
    do {
        try {
            let v87 = 0;
            const v104 = [];
            // v104 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v105 = {valueOf:v104,length:13.37,d:127,e:127};
            // v105 = .object(ofGroup: Object, withProperties: ["e", "d", "valueOf", "__proto__", "length"])
            const v106 = {c:v104,valueOf:v105,d:Array,a:1337};
            // v106 = .object(ofGroup: Object, withProperties: ["c", "a", "valueOf", "__proto__"], withMethods: ["d"])
            length = v106;
            for (const v169 in "object") {
            }
            for (const v172 in "object") {
            }
        } catch(v186) {
        }
        const v192 = v84 + 1;
        // v192 = .primitive
        v84 = v192;
    } while (v84 < 8);
    const v193 = v81 + 1;
    // v193 = .primitive
    v81 = v193;
    return v6;
}
const v197 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v197 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "ownKeys", "get", "getPrototypeOf", "call", "set", "deleteProperty", "has", "construct", "setPrototypeOf", "preventExtensions"])
const v199 = new Proxy(v9,v197);
// v199 = .unknown
v199[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
let v17 = 0;
const v18 = v17 + 1;
// v18 = .primitive
v17 = v18;
const v41 = [1337,1337,1337,1337,1337];
// v41 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v42(v43,v44,v45,v46) {
    'use strict'
    try {
        v46[3] = v46;
    } catch(v47) {
        const v54 = [1337,1337,1337];
        // v54 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v55 = [3664180981,3664180981,"string","string"];
        // v55 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v56 = {valueOf:v55,length:v54,toString:parseFloat,constructor:"string",c:parseFloat};
        // v56 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor", "valueOf"], withMethods: ["c", "toString"])
        function v57(v58,v59) {
            function v60(v61,v62,v63,v64) {
                'use strict'
            }
        }
        const v72 = v54.__proto__;
        // v72 = .object()
        const v73 = new v57(v56,v72);
        // v73 = .object()
    }
}
const v83 = {deleteProperty:v42,set:v42,getPrototypeOf:v42,call:v42,preventExtensions:v42,isExtensible:v42,construct:v42,get:v42,ownKeys:v42,setPrototypeOf:v42,has:v42};
// v83 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "ownKeys", "has", "getPrototypeOf", "setPrototypeOf", "call", "set", "get", "deleteProperty", "isExtensible", "preventExtensions"])
const v85 = new Proxy(v41,v83);
// v85 = .unknown
v85[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        v15[3] = v15;
    } catch(v16) {
        function v24(v25,v26,v27,v28,v29) {
            'use strict'
        }
        const v31 = v24.toLocaleString();
        // v31 = .unknown
        const v32 = eval(v31);
        // v32 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    }
}
const v40 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
// v40 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "call", "get", "deleteProperty", "has", "construct", "set", "setPrototypeOf", "isExtensible", "ownKeys", "preventExtensions"])
const v42 = new Proxy(v10,v40);
// v42 = .unknown
v42[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

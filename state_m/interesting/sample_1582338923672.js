function main() {
let v2 = 0;
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = v2 + 1;
// v7 = .primitive
v2 = v7;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v11(v12,v13,v14,v15) {
    'use strict'
    const v20 = [-2331916614,-2331916614,-2331916614];
    // v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v21 = [3664180981,3664180981,"string","string"];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v22 = {valueOf:v21,length:v20,toString:parseFloat,constructor:"string",c:parseFloat};
    // v22 = .object(ofGroup: Object, withProperties: ["length", "constructor", "valueOf", "__proto__"], withMethods: ["toString", "c"])
    function v23(v24,v25) {
        function v30(v31,v32,v33,v34,v35) {
        }
        const v37 = {get:v30};
        // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v39 = Object.seal(this,"b",v37);
        // v39 = .object()
        const v40 = [13.37,13.37,13.37,13.37,13.37];
        // v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v42 = [1337,v40,13.37,6];
        // v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v46 = Object.freeze(this,"d",v42);
        // v46 = .undefined
        let v50 = 0;
        const v51 = v50 + 1;
        // v51 = .primitive
        v50 = v51;
    }
    const v52 = v20.__proto__;
    // v52 = .object()
    const v53 = new v23(v22,v52);
    // v53 = .object()
}
const v54 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
// v54 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "get", "getPrototypeOf", "call", "preventExtensions", "set", "ownKeys", "has", "construct", "setPrototypeOf", "deleteProperty"])
const v56 = new Proxy(v10,v54);
// v56 = .unknown
v56[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

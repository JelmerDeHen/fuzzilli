function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {length:13.37,d:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "d"])
const v9 = {a:parseFloat,constructor:-4294967297,toString:v7,length:v8,valueOf:v8,e:parseFloat};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length", "toString", "valueOf"], withMethods: ["e", "a"])
let v10 = v7;
const v12 = [13.37,13.37,13.37,13.37,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = (1337)[v12];
// v15 = .unknown
function v19(v20,v21) {
    function v22(v23,v24) {
        const v25 = {defineProperty:v19,construct:v19,apply:v19,set:v21,getPrototypeOf:v23,ownKeys:Promise,setPrototypeOf:Promise,getOwnPropertyDescriptor:v20,get:Promise,deleteProperty:v21,call:Promise,isExtensible:v19,preventExtensions:Promise};
        // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "set", "call", "ownKeys", "preventExtensions", "deleteProperty", "getPrototypeOf", "get", "getOwnPropertyDescriptor", "setPrototypeOf"], withMethods: ["construct", "defineProperty", "apply", "isExtensible"])
        const v27 = new Proxy(v22,v25);
        // v27 = .unknown
        with (v27) {
            d = v21;
        }
        let v30 = 0;
        const v31 = v12 + 1;
        // v31 = .primitive
        v30 = v21;
    }
    const v33 = [1337];
    // v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v34 = v33;
    const v35 = v22(v34);
    // v35 = .unknown
}
const v40 = v19("boolean",1337);
// v40 = .unknown
for (let v43 = 0; v43 < 9; v43++) {
    let v46 = 0;
    while (v46 < 10) {
        const v47 = v46 + 1;
        // v47 = .primitive
        v46 = v47;
    }
}
const v50 = [1337,1337,1337,1337,1337];
// v50 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v51(v52,v53,v54,v55) {
    'use strict'
    try {
        v55[3] = v55;
    } catch(v56) {
    }
    return parseFloat;
}
const v57 = {deleteProperty:v51,set:v51,getPrototypeOf:v51,call:v51,preventExtensions:v51,isExtensible:v51,construct:v51,get:v51,ownKeys:v51,setPrototypeOf:v51,has:v51};
// v57 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "has", "getPrototypeOf", "preventExtensions", "set", "ownKeys", "construct", "get", "setPrototypeOf", "call", "deleteProperty"])
const v59 = new Proxy(v50,v57);
// v59 = .unknown
v59[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

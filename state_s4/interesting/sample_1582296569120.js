function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {toString:13.37,length:Promise,__proto__:1337,a:"string"};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "a", "toString"])
const v7 = {constructor:-3099533831,b:v6,c:v5,a:v5};
// v7 = .object(ofGroup: Object, withProperties: ["b", "c", "__proto__", "constructor", "a"])
const v10 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v17 = [Infinity,Infinity,Infinity];
        // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v18 = [v15,v17];
        // v18 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v19 = v18.toLocaleString();
        // v19 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    } catch(v20) {
    }
    let v24 = 0;
    const v25 = v24 + 1;
    // v25 = .primitive
    v24 = v25;
    const v26 = v7 === 0;
    // v26 = .boolean
    let v31 = 255;
    const v32 = v31 + 1;
    // v32 = .primitive
    v31 = v32;
    const v34 = [1337,1337];
    // v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v38 = [59446.68221467873];
    // v38 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v40 = [v38,1337,3779702335];
    // v40 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v41(v42,v43) {
        const v45 = Math.fround(v42);
        // v45 = .number
        const v47 = v45 >= 0;
        // v47 = .boolean
        let v48 = v34;
        if (v47) {
        } else {
        }
        for (const v50 in "boolean") {
            for (const v52 of "pvU0UUjoya") {
            }
        }
    }
    const v53 = v41(RegExp);
    // v53 = .unknown
    const v55 = v41(Uint32Array,v40);
    // v55 = .unknown
}
const v56 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
// v56 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "setPrototypeOf", "isExtensible", "ownKeys", "set", "has", "get", "deleteProperty", "getPrototypeOf", "construct", "preventExtensions"])
const v58 = new Proxy(v10,v56);
// v58 = .unknown
v58[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

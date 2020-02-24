function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        const v6 = [1337,1337,1337];
        // v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v7 = v4 + 1;
        // v7 = .primitive
        v4 = v7;
    } while (v4 < 8);
}
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v17 = {};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v18 = v17;
        const v23 = [2153514987,13.37,13.37,13.37,13.37];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v25 = [v18,v23,v23];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v26 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v23,__proto__:v25};
        // v26 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "b"])
        const v27 = {a:1337,toString:v17,constructor:"NEGATIVE_INFINITY",valueOf:v26,b:13.37,c:JSON,e:JSON};
        // v27 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "e", "__proto__", "constructor", "a", "c", "b"])
        const v29 = JSON.stringify(v27,Reflect,"name");
        // v29 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        v15[3] = v15;
    } catch(v30) {
    }
    const v32 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "preventExtensions", "get", "construct", "set", "isExtensible", "defineProperty", "getPrototypeOf", "ownKeys", "deleteProperty", "apply"])
}
const v33 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "deleteProperty", "ownKeys", "isExtensible", "has", "preventExtensions", "setPrototypeOf", "set", "getPrototypeOf", "call", "construct"])
const v35 = new Proxy(v10,v33);
// v35 = .unknown
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

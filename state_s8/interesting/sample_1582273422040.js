function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        const v6 = [1337,1337,1337];
        // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v7 = v4 + 1;
        // v7 = .primitive
        v4 = v7;
    } while (v4 < 8);
}
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v11(v12,v13,v14,v15) {
    'use strict'
    try {
        const v17 = {};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v18 = v17;
        const v23 = [2153514987,13.37,13.37,13.37,13.37];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v25 = [v18,v23,v23];
        // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v26 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v23,__proto__:v25};
        // v26 = .object(ofGroup: Object, withProperties: ["b", "length", "valueOf", "__proto__"])
        const v27 = {a:1337,toString:v17,constructor:"NEGATIVE_INFINITY",valueOf:v26,b:13.37,c:JSON,e:JSON};
        // v27 = .object(ofGroup: Object, withProperties: ["toString", "a", "c", "constructor", "__proto__", "b", "valueOf", "e"])
        const v29 = JSON.stringify(v27,Reflect,"name");
        // v29 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
        v15[3] = v15;
    } catch(v30) {
    }
    const v32 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
    // v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "getOwnPropertyDescriptor", "isExtensible", "deleteProperty", "apply", "ownKeys", "defineProperty", "set", "getPrototypeOf", "get", "preventExtensions"])
}
const v33 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:v11,has:v11};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "has", "getPrototypeOf", "setPrototypeOf", "preventExtensions", "set", "deleteProperty", "construct", "isExtensible", "ownKeys", "call"])
const v35 = new Proxy(v10,v33);
// v35 = .unknown
v35[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

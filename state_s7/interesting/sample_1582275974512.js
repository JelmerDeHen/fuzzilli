function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        const v5 = v4 + 1;
        // v5 = .primitive
        v4 = v5;
    } while (v4 < 8);
}
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v15 = {};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v16 = v15;
        const v21 = [2153514987,13.37,13.37,13.37,13.37];
        // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v24 = eval(1337);
        // v24 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        const v26 = [v16,v21,v21];
        // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v27 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v21,__proto__:v26};
        // v27 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__"])
        const v28 = {a:1337,toString:v15,constructor:"NEGATIVE_INFINITY",valueOf:v27,b:13.37,c:JSON,e:JSON};
        // v28 = .object(ofGroup: Object, withProperties: ["a", "b", "valueOf", "constructor", "__proto__", "c", "toString", "e"])
        const v30 = JSON.stringify(v28,Reflect,"name");
        // v30 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        v13[3] = v13;
    } catch(v31) {
    }
}
const v32 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "preventExtensions", "set", "call", "construct", "getPrototypeOf", "isExtensible", "deleteProperty", "ownKeys", "get", "setPrototypeOf"])
const v34 = new Proxy(v8,v32);
// v34 = .unknown
v34[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = ["boolean",eval];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v14 = {};
        // v14 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v15 = v14;
        const v16 = Object.entries(v11);
        // v16 = .object()
        const v17 = eval < v2;
        // v17 = .boolean
        let v23 = 0;
        const v27 = v23 + 1;
        // v27 = .primitive
        v23 = v27;
        const v35 = [2153514987,1,13.37,13.37,v12];
        // v35 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v37 = [v15,v35,v35];
        // v37 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v38 = {length:13.37,b:v11,valueOf:v35,__proto__:v37};
        // v38 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "length", "valueOf"])
        const v39 = {a:1337,toString:v11,constructor:"NEGATIVE_INFINITY",valueOf:v38,b:13.37,c:JSON,e:JSON};
        // v39 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "a", "b", "e", "__proto__", "toString", "constructor"])
        const v41 = JSON.stringify(v39,Reflect,"name");
        // v41 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    } catch(v42) {
    }
}
const v43 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "has", "getPrototypeOf", "deleteProperty", "call", "set", "setPrototypeOf", "construct", "get", "isExtensible", "preventExtensions"])
const v45 = new Proxy(v6,v43);
// v45 = .unknown
v45[1] = "MIN_VALUE";
let v48 = 0;
const v49 = v48 + 1;
// v49 = .primitive
v48 = v49;
}
%NeverOptimizeFunction(main);
main();

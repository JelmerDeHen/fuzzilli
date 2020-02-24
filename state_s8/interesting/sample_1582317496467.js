function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v6,v4,1337,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {b:13.37,a:parseInt,d:parseInt};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"], withMethods: ["a", "d"])
const v9 = {a:v6,d:"UWnNZwhBrz",constructor:"UWnNZwhBrz"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "d", "constructor"])
let v10 = 13.37;
const v14 = [1337,1337,1337,1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v15(v16,v17,v18,v19) {
    'use strict'
    try {
        v19[3] = v19;
    } catch(v20) {
        function v22(v23,v24,v25,v26,v27) {
            'use strict'
            return v16;
        }
        const v28 = v22.toLocaleString();
        // v28 = .unknown
        const v29 = eval(v28);
        // v29 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    }
    let v33 = 0;
    const v34 = JSON.stringify(v33);
    // v34 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    const v36 = [13.37,13.37,13.37,13.37];
    // v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v37 = v36.reduce(parseInt,v34);
    // v37 = .unknown
    return v14;
}
const v38 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "preventExtensions", "isExtensible", "setPrototypeOf", "getPrototypeOf", "get", "deleteProperty", "ownKeys", "has", "set", "call"])
const v40 = new Proxy(v14,v38);
// v40 = .unknown
v40[-380524572] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [-4294967295,13.37,2];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v6 = v4;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = {length:1337,e:1337,c:v9,a:1337,toString:"symbol"};
// v10 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "e", "length", "toString"])
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v22 = [1337];
        // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v23 = {__proto__:v22,a:v22,constructor:Number,e:13.37,length:"number",b:13.37};
        // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "e", "b", "a"], withMethods: ["constructor"])
        const v24 = 13.37 && v23;
        // v24 = .boolean
        let v26 = v14;
        const v29 = String.fromCharCode(v26,4159299528);
        // v29 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        let v31 = "p8Xp0R1moN";
        v31 = v29;
        const v32 = JSON.stringify(v31);
        // v32 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        v23[v32] = 13.37;
        let v34 = v24;
        const v35 = JSON.stringify(v34);
        // v35 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        const v37 = JSON.parse(v35,2435262485);
        // v37 = .unknown
        const v39 = v5.concat(1337,v6,v5,"name",v16);
        // v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    } catch(v40) {
    }
    return v13;
}
const v41 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
// v41 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "set", "construct", "getPrototypeOf", "setPrototypeOf", "get", "isExtensible", "preventExtensions", "has", "ownKeys", "deleteProperty"])
const v43 = new Proxy(v10,v41);
// v43 = .unknown
v43[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

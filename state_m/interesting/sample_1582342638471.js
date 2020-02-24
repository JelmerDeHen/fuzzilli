function main() {
function v2(v3,v4) {
    const v6 = {__proto__:536870912};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v6) {
        __proto__[0] = v2;
    }
}
const v9 = v2(1024,4.0);
// v9 = .unknown
let v11 = 1337;
const v14 = String.fromCharCode(v11,3085701344);
// v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v20 = [1337,1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v21 = [1468489541,13.37,2];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v22 = v20;
const v25 = [];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v27 = {get:Uint8ClampedArray};
// v27 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v29 = Object.defineProperty(v21,65537,v27);
// v29 = .undefined
const v30 = {length:1337,e:1337,c:v25,a:1337,toString:"symbol"};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "a", "toString", "e", "length"])
function v32(v33,v34,v35,v36) {
    'use strict'
    try {
        const v38 = v21.includes(1337,v22,v21,"name",v36);
        // v38 = .boolean
    } catch(v39) {
    }
}
const v40 = {deleteProperty:v32,set:v32,getPrototypeOf:v32,call:v32,preventExtensions:v32,isExtensible:v32,construct:v32,get:v32,ownKeys:v32,setPrototypeOf:v32,has:v32};
// v40 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "deleteProperty", "construct", "get", "preventExtensions", "getPrototypeOf", "ownKeys", "setPrototypeOf", "set", "call", "has"])
const v42 = new Proxy(v30,v40);
// v42 = .unknown
v42[1] = "MIN_VALUE";
let v48 = 0;
const v49 = v48 + 1;
// v49 = .primitive
v48 = v49;
}
%NeverOptimizeFunction(main);
main();

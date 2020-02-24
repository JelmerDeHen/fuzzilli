function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v4,v4,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v15 = [1337,Uint8ClampedArray];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v16 = [1468489541,13.37,2];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v17 = v15;
v16.length = 6;
const v20 = [];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v21 = {get:Uint8ClampedArray};
// v21 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v23 = Object.seal(v16,1337,v21);
// v23 = .object()
const v24 = {length:1337,e:1337,c:v20,a:1337,toString:"symbol"};
// v24 = .object(ofGroup: Object, withProperties: ["a", "length", "c", "e", "toString", "__proto__"])
function v26(v27,v28,v29,v30) {
    'use strict'
    const v32 = v16.includes(v30,v17,v16,"name",v30);
    // v32 = .boolean
}
const v33 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v26,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
// v33 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "has", "setPrototypeOf", "ownKeys", "isExtensible", "get", "preventExtensions", "call", "deleteProperty", "construct", "set"])
const v35 = new Proxy(v24,v33);
// v35 = .unknown
v35[1] = "MIN_VALUE";
const v36 = {d:v7,c:9007199254740993,__proto__:13.37,a:1337};
// v36 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c", "d"])
const v37 = {a:v6};
// v37 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
let v38 = 13.37;
function v40(v41,v42,v43,v44,...v45) {
    const v49 = [-2];
    // v49 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v50 = v49;
    const v51 = Math.pow(v50,-1);
    // v51 = .number
    const v52 = Math.log1p(v51);
    // v52 = .number
}
const v53 = v40(1337);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();

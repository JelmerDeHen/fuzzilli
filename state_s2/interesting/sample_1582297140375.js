function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4,"rV32pbKjef",-65536];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {e:-65536};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
const v9 = {};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v10 = 13.37;
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = ["asyncIterator",1337,1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v17(v18,v19,v20,v21) {
    'use strict'
    const v23 = {};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__"])
    let v24 = v23;
    let v25 = v24;
    if (v18) {
        v16[-65536] = v10;
        v25 = v20;
    } else {
        v10 = 1337;
        v25 = "name";
    }
    const v30 = [2153514987,13.37,13.37,13.37,13.37];
    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v32 = [v24,v30,v30];
    // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v33 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v30,__proto__:v32};
    // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "b"])
    const v34 = {a:1337,toString:v21,constructor:"NEGATIVE_INFINITY",valueOf:v33,b:13.37,c:JSON,e:JSON};
    // v34 = .object(ofGroup: Object, withProperties: ["toString", "e", "__proto__", "a", "constructor", "c", "b", "valueOf"])
    const v36 = JSON.stringify(v34,Reflect,"name");
    // v36 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    return v17;
}
const v37 = {deleteProperty:v17,set:v17,getPrototypeOf:v17,call:v17,preventExtensions:v17,isExtensible:v17,construct:v17,get:v17,ownKeys:v17,setPrototypeOf:v17,has:v17};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "get", "set", "getPrototypeOf", "preventExtensions", "setPrototypeOf", "call", "isExtensible", "ownKeys", "has", "deleteProperty"])
const v39 = new Proxy(v16,v37);
// v39 = .unknown
v39[1] = "MIN_VALUE";
let v42 = 0;
let v45 = 0;
const v46 = typeof v13;
// v46 = .string
const v47 = v46 === v17;
// v47 = .boolean
const v48 = v45 + 1;
// v48 = .primitive
v45 = v48;
const v49 = v42 + 1;
// v49 = .primitive
v42 = v49;
}
%NeverOptimizeFunction(main);
main();

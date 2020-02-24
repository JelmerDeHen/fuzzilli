function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {c:10,constructor:10,valueOf:v4,__proto__:10,toString:"YjXjEe2.bY"};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__", "toString", "valueOf"])
let v7 = 0;
let v10 = 0;
function v11(v12,v13) {
    return 13.37;
}
const v15 = [v4];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v16 = v15;
const v17 = v11(v16);
// v17 = .unknown
const v18 = v11(v7,0);
// v18 = .unknown
const v19 = {preventExtensions:v17,call:v11,getOwnPropertyDescriptor:v18,isExtensible:v11,ownKeys:v17,has:v11,get:v11,deleteProperty:v17,apply:v17,setPrototypeOf:v17,set:v18,construct:v18};
// v19 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "construct", "ownKeys", "deleteProperty", "preventExtensions", "getOwnPropertyDescriptor", "set", "__proto__", "apply"], withMethods: ["isExtensible", "get", "call", "has"])
const v21 = new Proxy(v15,v19);
// v21 = .unknown
const v22 = v16.concat(v21,v10,v5,v19,Proxy);
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
%NeverOptimizeFunction(main);
main();

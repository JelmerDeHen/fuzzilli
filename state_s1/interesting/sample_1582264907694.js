function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {c:10,constructor:10,valueOf:v4,__proto__:10,toString:"YjXjEe2.bY"};
// v5 = .object(ofGroup: Object, withProperties: ["c", "toString", "valueOf", "constructor", "__proto__"])
let v7 = 0;
let v10 = 0;
function v11(v12,v13) {
    return 13.37;
}
const v15 = [v4];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v16 = v15;
const v17 = v11(v16);
// v17 = .unknown
const v18 = v11(v7,0);
// v18 = .unknown
const v19 = {preventExtensions:v17,call:v11,getOwnPropertyDescriptor:v18,isExtensible:v11,ownKeys:v17,has:v11,get:v11,deleteProperty:v17,apply:v17,setPrototypeOf:v17,set:v18,construct:v18};
// v19 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "__proto__", "set", "apply", "setPrototypeOf", "preventExtensions", "ownKeys", "deleteProperty", "construct"], withMethods: ["get", "call", "isExtensible", "has"])
const v21 = new Proxy(v15,v19);
// v21 = .unknown
const v22 = v16.concat(v21,v10,v5,v19,Proxy);
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
}
%NeverOptimizeFunction(main);
main();

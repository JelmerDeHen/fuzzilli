function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {c:10,constructor:10,valueOf:v4,__proto__:10,toString:"YjXjEe2.bY"};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "__proto__", "valueOf", "c"])
let v7 = 0;
let v10 = 0;
function v11(v12,v13) {
    return 13.37;
}
const v15 = [v4];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v16 = v15;
const v17 = v11(v16);
// v17 = .unknown
const v18 = v11(v7,0);
// v18 = .unknown
const v19 = {preventExtensions:v17,call:v11,getOwnPropertyDescriptor:v18,isExtensible:v11,ownKeys:v17,has:v11,get:v11,deleteProperty:v17,apply:v17,setPrototypeOf:v17,set:v18,construct:v18};
// v19 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "apply", "preventExtensions", "construct", "deleteProperty", "setPrototypeOf", "set", "__proto__", "ownKeys"], withMethods: ["isExtensible", "get", "has", "call"])
const v21 = new Proxy(v15,v19);
// v21 = .unknown
const v22 = v16.concat(v21,v10,v5,v19,Proxy);
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
}
%NeverOptimizeFunction(main);
main();

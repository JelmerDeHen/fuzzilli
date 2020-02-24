function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {c:10,constructor:10,valueOf:v4,__proto__:10,toString:"YjXjEe2.bY"};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "c", "toString", "__proto__", "valueOf"])
let v7 = 0;
let v10 = 0;
function v11(v12,v13) {
    return 13.37;
}
const v15 = [v4];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v16 = v15;
const v17 = v11(v16);
// v17 = .unknown
const v18 = v11(v7,0);
// v18 = .unknown
const v19 = {preventExtensions:v17,call:v11,getOwnPropertyDescriptor:v18,isExtensible:v11,ownKeys:v17,has:v11,get:v11,deleteProperty:v17,apply:v17,setPrototypeOf:v17,set:v18,construct:v18};
// v19 = .object(ofGroup: Object, withProperties: ["deleteProperty", "set", "construct", "setPrototypeOf", "apply", "preventExtensions", "ownKeys", "__proto__", "getOwnPropertyDescriptor"], withMethods: ["call", "get", "isExtensible", "has"])
const v21 = new Proxy(v15,v19);
// v21 = .unknown
const v22 = v16.concat(v21,v10,v5,v19,Proxy);
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
%NeverOptimizeFunction(main);
main();

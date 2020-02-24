function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {c:10,constructor:10,valueOf:v3,__proto__:10,toString:"YjXjEe2.bY"};
// v4 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "c", "__proto__", "constructor"])
let v6 = 0;
let v9 = 0;
function v10(v11,v12) {
    let v16 = 0;
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
    return v11;
}
const v24 = [v3];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v25 = v24;
const v26 = v10(v25);
// v26 = .unknown
const v27 = v10(v6,0);
// v27 = .unknown
const v28 = {preventExtensions:v26,call:v10,getOwnPropertyDescriptor:v27,isExtensible:v10,ownKeys:v26,has:v10,get:v10,deleteProperty:v26,apply:v26,setPrototypeOf:v26,set:v27,construct:v27};
// v28 = .object(ofGroup: Object, withProperties: ["ownKeys", "set", "deleteProperty", "setPrototypeOf", "getOwnPropertyDescriptor", "apply", "__proto__", "preventExtensions", "construct"], withMethods: ["call", "has", "isExtensible", "get"])
const v30 = new Proxy(v24,v28);
// v30 = .unknown
const v31 = v25.concat(v30,v9,v4,v28,Proxy);
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
%NeverOptimizeFunction(main);
main();

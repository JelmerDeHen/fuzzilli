function main() {
const v3 = [13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {c:10,constructor:10,valueOf:v3,__proto__:10,toString:"YjXjEe2.bY"};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "c", "__proto__", "valueOf"])
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
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v25 = v24;
const v26 = v10(v25);
// v26 = .unknown
const v27 = v10(v6,0);
// v27 = .unknown
const v28 = {preventExtensions:v26,call:v10,getOwnPropertyDescriptor:v27,isExtensible:v10,ownKeys:v26,has:v10,get:v10,deleteProperty:v26,apply:v26,setPrototypeOf:v26,set:v27,construct:v27};
// v28 = .object(ofGroup: Object, withProperties: ["ownKeys", "construct", "apply", "__proto__", "setPrototypeOf", "set", "deleteProperty", "preventExtensions", "getOwnPropertyDescriptor"], withMethods: ["has", "call", "get", "isExtensible"])
const v30 = new Proxy(v24,v28);
// v30 = .unknown
const v31 = v25.concat(v30,v9,v4,v28,Proxy);
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
}
%NeverOptimizeFunction(main);
main();

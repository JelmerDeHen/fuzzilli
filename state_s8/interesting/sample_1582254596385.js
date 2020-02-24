function main() {
const v2 = 3156875969 - "boolean";
// v2 = .number
let v5 = 0;
const v6 = 3156875969 || v5;
// v6 = .boolean
const v7 = v5 + 1;
// v7 = .primitive
v5 = v7;
let v8 = v5;
try {
    const v9 = {setPrototypeOf:v2,defineProperty:v8,ownKeys:0,getPrototypeOf:8,isExtensible:3156875969,has:0,apply:v5,get:v8,construct:0,call:"boolean"};
    // v9 = .object(ofGroup: Object, withProperties: ["call", "ownKeys", "get", "getPrototypeOf", "__proto__", "defineProperty", "apply", "construct", "isExtensible", "setPrototypeOf", "has"])
    const v11 = Proxy(v8,v9);
    // v11 = .unknown
} catch(v12) {
}
const v23 = [13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v25 = [3156875969,3156875969,1337,DataView];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v31 = (1337)[v25];
// v31 = .unknown
let v48 = 0;
}
%NeverOptimizeFunction(main);
main();

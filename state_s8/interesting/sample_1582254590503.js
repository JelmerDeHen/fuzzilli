function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v5 = [13.37,13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = [3156875969,3156875969,1337,DataView];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v13 = v11;
const v16 = {call:1337,setPrototypeOf:13.37,apply:1337,has:1337,getOwnPropertyDescriptor:DataView,get:DataView,preventExtensions:13.37,set:1337,construct:v12,getPrototypeOf:"boolean",deleteProperty:1337};
// v16 = .object(ofGroup: Object, withProperties: ["call", "set", "get", "getPrototypeOf", "__proto__", "getOwnPropertyDescriptor", "apply", "preventExtensions", "construct", "deleteProperty", "setPrototypeOf", "has"])
const v18 = new Proxy(v13,v16);
// v18 = .unknown
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
const v23 = [];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v24 = v5[Function];
// v24 = .unknown
try {
    const v25 = v24(v23,v2);
    // v25 = .unknown
} catch(v26) {
}
}
%NeverOptimizeFunction(main);
main();

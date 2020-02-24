function main() {
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = [3156875969,3156875969,1337,Uint8Array];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v9 = v7;
const v13 = {setPrototypeOf:"boolean",apply:3156875969,construct:1337,set:v8,preventExtensions:13.37,ownKeys:"boolean",getOwnPropertyDescriptor:v9,deleteProperty:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "preventExtensions", "deleteProperty", "set", "getOwnPropertyDescriptor", "__proto__", "apply", "ownKeys", "construct"])
const v15 = new Proxy(Uint8Array,v13);
// v15 = .unknown
let v18 = 0;
const v19 = Math.log1p();
// v19 = .number
const v20 = v18 + 1;
// v20 = .primitive
v18 = v20;
}
%NeverOptimizeFunction(main);
main();

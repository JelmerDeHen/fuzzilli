function main() {
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = [3156875969,3156875969,1337,Uint8Array];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v9 = v7;
const v13 = {setPrototypeOf:"boolean",apply:3156875969,construct:1337,set:v8,preventExtensions:13.37,ownKeys:"boolean",getOwnPropertyDescriptor:v9,deleteProperty:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys", "deleteProperty", "construct", "preventExtensions", "apply", "getOwnPropertyDescriptor", "set", "setPrototypeOf"])
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

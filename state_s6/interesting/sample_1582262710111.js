function main() {
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = [3156875969,3156875969,1337,Uint8Array];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v9 = v7;
const v13 = {setPrototypeOf:"boolean",apply:3156875969,construct:1337,set:v8,preventExtensions:13.37,ownKeys:"boolean",getOwnPropertyDescriptor:v9,deleteProperty:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "ownKeys", "construct", "getOwnPropertyDescriptor", "preventExtensions", "__proto__", "apply", "set", "deleteProperty"])
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

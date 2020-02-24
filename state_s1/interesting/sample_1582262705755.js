function main() {
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = [3156875969,3156875969,1337,Uint8Array];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v9 = v7;
const v13 = {setPrototypeOf:"boolean",apply:3156875969,construct:1337,set:v8,preventExtensions:13.37,ownKeys:"boolean",getOwnPropertyDescriptor:v9,deleteProperty:13.37};
// v13 = .object(ofGroup: Object, withProperties: ["preventExtensions", "deleteProperty", "construct", "ownKeys", "setPrototypeOf", "set", "getOwnPropertyDescriptor", "__proto__", "apply"])
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

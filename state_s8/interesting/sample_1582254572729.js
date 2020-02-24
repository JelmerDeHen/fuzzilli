function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [3156875969,3156875969,1337,Uint8Array];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = v5;
const v11 = {setPrototypeOf:"boolean",apply:3156875969,construct:1337,set:v6,preventExtensions:13.37,ownKeys:"boolean",getOwnPropertyDescriptor:v7,deleteProperty:13.37};
// v11 = .object(ofGroup: Object, withProperties: ["construct", "preventExtensions", "deleteProperty", "setPrototypeOf", "ownKeys", "__proto__", "getOwnPropertyDescriptor", "set", "apply"])
const v13 = new Proxy(Uint8Array,v11);
// v13 = .unknown
const v15 = {set:v13,get:v13};
// v15 = .object(ofGroup: Object, withProperties: ["get", "set", "__proto__"])
const v17 = Object.defineProperty(v11,"constructor",v15);
// v17 = .undefined
}
%NeverOptimizeFunction(main);
main();

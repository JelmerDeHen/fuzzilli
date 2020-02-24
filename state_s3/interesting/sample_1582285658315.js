function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = ["replace","replace",v5];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {valueOf:v5,b:-1662380622,c:v3,a:v3,__proto__:1337,constructor:v6};
// v7 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__", "c", "valueOf", "constructor"])
const v9 = [13.37,13.37,v7,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v13 = 1464040138;
let v14 = v13;
const v16 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "has", "setPrototypeOf", "deleteProperty", "getPrototypeOf", "construct", "defineProperty", "call", "getOwnPropertyDescriptor", "get", "set"])
const v18 = new Uint8ClampedArray(Symbol,v16);
// v18 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
try {
    const v19 = Symbol.keyFor(v18);
    // v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
} catch(v20) {
}
}
%NeverOptimizeFunction(main);
main();

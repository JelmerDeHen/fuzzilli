function main() {
const v1 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "get", "preventExtensions", "call", "has", "setPrototypeOf", "getOwnPropertyDescriptor", "deleteProperty", "getPrototypeOf", "defineProperty"])
const v3 = new Proxy(Symbol,v1);
// v3 = .unknown
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v6 = v5;
let v8 = undefined;
let v12 = 0;
try {
    const v14 = Symbol.keyFor(v3);
    // v14 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
} catch(v15) {
}
const v16 = v12 + 1;
// v16 = .primitive
v12 = v16;
const v19 = "iterator" != 4294967297;
// v19 = .boolean
let v22 = 0;
}
%NeverOptimizeFunction(main);
main();

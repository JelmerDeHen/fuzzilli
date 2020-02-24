function main() {
const v1 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "getOwnPropertyDescriptor", "set", "defineProperty", "getPrototypeOf", "construct", "preventExtensions", "has", "get", "setPrototypeOf", "deleteProperty"])
const v3 = new Proxy(Symbol,v1);
// v3 = .unknown
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v6 = v5;
let v8 = undefined;
let v12 = 0;
try {
    const v14 = Symbol.keyFor(v3);
    // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
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

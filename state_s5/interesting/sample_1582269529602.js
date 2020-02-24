function main() {
const v1 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "get", "call", "setPrototypeOf", "defineProperty", "preventExtensions", "getOwnPropertyDescriptor", "has", "getPrototypeOf", "deleteProperty", "set"])
const v3 = new Proxy(Symbol,v1);
// v3 = .unknown
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v6 = v5;
let v8 = undefined;
let v12 = 0;
try {
    const v14 = Symbol.keyFor(v3);
    // v14 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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

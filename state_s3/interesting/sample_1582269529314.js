function main() {
const v1 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "preventExtensions", "getOwnPropertyDescriptor", "construct", "get", "set", "defineProperty", "setPrototypeOf", "deleteProperty", "has", "call"])
const v3 = new Proxy(Symbol,v1);
// v3 = .unknown
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v6 = v5;
let v8 = undefined;
let v12 = 0;
try {
    const v14 = Symbol.keyFor(v3);
    // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
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

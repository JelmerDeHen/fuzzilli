function main() {
const v1 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "deleteProperty", "getOwnPropertyDescriptor", "construct", "has", "get", "setPrototypeOf", "preventExtensions", "getPrototypeOf", "set", "call"])
const v3 = new Proxy(Symbol,v1);
// v3 = .unknown
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v6 = v5;
let v8 = undefined;
let v12 = 0;
try {
    const v14 = Symbol.keyFor(v3);
    // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
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

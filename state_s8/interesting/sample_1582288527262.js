function main() {
const v1 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "set", "defineProperty", "setPrototypeOf", "getOwnPropertyDescriptor", "get", "call", "getPrototypeOf", "deleteProperty", "construct", "preventExtensions"])
const v3 = new Int8Array(Symbol,v1);
// v3 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
try {
    const v4 = Symbol.keyFor(v3);
    // v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();

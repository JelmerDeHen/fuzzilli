function main() {
const v1 = {setPrototypeOf:Symbol,get:Symbol,set:Symbol,getOwnPropertyDescriptor:Symbol,preventExtensions:Symbol,getPrototypeOf:Symbol,defineProperty:Symbol,construct:Symbol,deleteProperty:Symbol,call:Symbol,has:Symbol};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "deleteProperty", "set", "getPrototypeOf", "setPrototypeOf", "get", "defineProperty", "has", "construct", "call", "getOwnPropertyDescriptor"])
const v3 = new Float32Array(Symbol,v1);
// v3 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "constructor", "__proto__", "buffer", "byteOffset", "length"], withMethods: ["entries", "sort", "fill", "some", "reduceRight", "map", "values", "includes", "copyWithin", "reverse", "indexOf", "filter", "findIndex", "find", "every", "set", "keys", "subarray", "reduce", "slice", "forEach", "join", "lastIndexOf"])
try {
    const v4 = Symbol.keyFor(v3);
    // v4 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();

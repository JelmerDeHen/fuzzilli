function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [v3];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {a:"/v25+ju1jr",valueOf:13.37,b:v4,length:1337,constructor:1337};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "a", "__proto__", "b", "constructor"])
const v6 = typeof v5;
// v6 = .string
const v8 = v6 === "boolean";
// v8 = .boolean
let v11 = 0;
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = new String(6992);
// v15 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v16 = v12.__proto__;
// v16 = .object()
v16.__proto__ = v15;
try {
    const v19 = [13.37,13.37];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v20 = v19[1024];
    // v20 = .unknown
    const v24 = [13.37,13.37,13.37,-4294967297];
    // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v26 = [-262575.0813385777,4294967295,v24];
    // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v28 = v26.push(Uint32Array);
    // v28 = .integer
    const v29 = {has:Array,construct:v20,toString:v20,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v20,isExtensible:v20,call:v20,set:Array,getOwnPropertyDescriptor:Array};
    // v29 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "preventExtensions", "call", "construct", "isExtensible"], withMethods: ["setPrototypeOf", "has", "deleteProperty", "getOwnPropertyDescriptor", "set"])
    const v31 = Proxy(v19,v29);
    // v31 = .unknown
} catch(v32) {
}
}
%NeverOptimizeFunction(main);
main();

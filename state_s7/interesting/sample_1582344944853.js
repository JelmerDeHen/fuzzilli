function main() {
const v4 = new Int16Array(6992);
// v4 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
const v7 = [13.37,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = v4.indexOf(13.37,-312298109);
// v8 = .integer
let v11 = 0;
v11 = 13.37;
const v12 = v7[1024];
// v12 = .unknown
const v13 = {has:Array,construct:v12,toString:v12,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v12,isExtensible:v12,call:v12,set:Array,getOwnPropertyDescriptor:Array};
// v13 = .object(ofGroup: Object, withProperties: ["preventExtensions", "call", "__proto__", "toString", "construct", "isExtensible"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "has", "set", "deleteProperty"])
const v15 = eval(v4,v13);
// v15 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();

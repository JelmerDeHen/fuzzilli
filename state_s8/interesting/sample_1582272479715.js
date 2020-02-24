function main() {
const v4 = String.fromCodePoint(0,65535,0,4);
// v4 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v12 = 0;
const v15 = {constructor:"sZO5vNgWS7",length:9007199254740993};
// v15 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
let v19 = 0;
const v23 = {length:"N0Xx92zvHQ"};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v24 = {constructor:13.37,length:13.37,__proto__:v23,toString:Number,a:"N0Xx92zvHQ"};
// v24 = .object(ofGroup: Object, withProperties: ["a", "length", "__proto__", "constructor"], withMethods: ["toString"])
const v31 = "object".constructor;
// v31 = .function()
const v32 = {apply:v31,deleteProperty:gc,preventExtensions:Object,ownKeys:v31,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "defineProperty", "ownKeys", "setPrototypeOf", "isExtensible", "preventExtensions", "construct", "apply", "has", "deleteProperty", "set"])
const v34 = new Proxy(v24,v32);
// v34 = .unknown
const v42 = gc();
// v42 = .undefined
const v45 = gc();
// v45 = .undefined
v5[v4] = WeakSet;
}
%NeverOptimizeFunction(main);
main();

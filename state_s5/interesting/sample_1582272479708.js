function main() {
const v4 = String.fromCodePoint(0,65535,0,4);
// v4 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v12 = 0;
const v15 = {constructor:"sZO5vNgWS7",length:9007199254740993};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
let v19 = 0;
const v23 = {length:"N0Xx92zvHQ"};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v24 = {constructor:13.37,length:13.37,__proto__:v23,toString:Number,a:"N0Xx92zvHQ"};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "constructor", "length"], withMethods: ["toString"])
const v31 = "object".constructor;
// v31 = .function()
const v32 = {apply:v31,deleteProperty:gc,preventExtensions:Object,ownKeys:v31,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "isExtensible", "defineProperty", "preventExtensions", "setPrototypeOf", "construct", "set", "ownKeys", "deleteProperty", "has", "apply"])
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

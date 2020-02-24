function main() {
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
const v6 = [13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = v6.toString();
// v7 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v10 = [13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = [13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = {b:v10,c:13.37,valueOf:-9007199254740993,d:v7,constructor:1337,__proto__:v12};
// v14 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "constructor", "b", "__proto__", "c"])
let v15 = v14;
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v18 = v17;
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
function v24(v25,v26) {
    const v28 = {deleteProperty:Object,apply:Object,getPrototypeOf:RegExp,defineProperty:v26,set:RegExp,construct:v24,setPrototypeOf:v26,has:v24};
    // v28 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf", "defineProperty"], withMethods: ["getPrototypeOf", "set", "construct", "has", "deleteProperty", "apply"])
    const v30 = new Proxy(v15,v28);
    // v30 = .unknown
    const v31 = Object.freeze(v30);
    // v31 = .undefined
}
let v32 = v18;
const v33 = v24(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();

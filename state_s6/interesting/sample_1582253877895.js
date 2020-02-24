function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "length", "__proto__", "a", "b"])
const v9 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "toString", "b"])
let v10 = v4;
const v15 = [4294967297,13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = [v15,v17,Uint16Array];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v19 = {b:v17,e:Uint16Array,a:4294967297,length:"iterator",valueOf:4294967297};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "a", "e", "b"])
const v20 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v20 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "b", "e"])
let v21 = v15;
const v23 = Object();
// v23 = .object()
const v24 = v15 && 1337;
// v24 = .boolean
let v25 = v17;
if (v24) {
    const v26 = {e:v20,c:v18,...v7,...Object,...4294967297,...13.37,...v19};
    // v26 = .object(ofGroup: Object, withProperties: ["length", "c", "valueOf", "e", "a", "constructor", "b", "prototype", "__proto__"], withMethods: ["preventExtensions", "every", "defineProperty", "forEach", "slice", "shift", "toString", "fill", "freeze", "copyWithin", "map", "assign", "pop", "create", "seal", "values", "is", "concat", "flatMap", "getOwnPropertyNames", "getOwnPropertySymbols", "isFrozen", "lastIndexOf", "defineProperties", "sort", "getPrototypeOf", "entries", "findIndex", "isSealed", "includes", "push", "unshift", "some", "fromEntries", "find", "filter", "indexOf", "toLocaleString", "reduceRight", "flat", "splice", "getOwnPropertyDescriptor", "getOwnPropertyDescriptors", "keys", "isExtensible", "join", "setPrototypeOf", "reduce", "reverse"])
    v25 = 4294967297;
} else {
    const v28 = Symbol.unscopables;
    // v28 = .unknown
    Symbol[v28] = Symbol;
    v25 = v6;
}
let v31 = 0;
do {
    v21[-2147483649] = v17;
    const v32 = v31 + 1;
    // v32 = .primitive
    v31 = v32;
} while (v31 < 10);
let v33 = 10;
try {
    const v34 = new Uint16Array("iterator");
    // v34 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
    v33 = 13.37;
} catch(v35) {
    let v36 = v35;
    v33 = v36;
}
const v37 = v15.toLocaleString();
// v37 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v38 = Object();
// v38 = .object()
}
%NeverOptimizeFunction(main);
main();

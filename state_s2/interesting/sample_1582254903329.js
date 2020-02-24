function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = ["a",-9007199254740992,-9007199254740992];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {a:1337,toString:13.37,c:v4,__proto__:v6,valueOf:"a",constructor:v4};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "valueOf", "__proto__", "c", "a"])
const v9 = {toString:v4,valueOf:v8,d:1337,constructor:-9007199254740992};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "valueOf", "__proto__", "d"])
let v10 = 1337;
const v13 = 13.37 === RegExp;
// v13 = .boolean
let v14 = v9;
if (v13) {
    const v15 = v8.call(1337,RegExp);
    // v15 = .unknown
    v14 = v6;
} else {
    v6.toString = RegExp;
    v10 = v13;
}
const v16 = typeof 3156875969;
// v16 = .string
const v18 = v16 === "number";
// v18 = .boolean
const v19 = v6[-890783832];
// v19 = .unknown
const v21 = v6[4294967296];
// v21 = .unknown
const v22 = (1337)["boolean"];
// v22 = .unknown
const v23 = v9.toString;
// v23 = .unknown
let v26 = 0;
do {
    const v27 = {c:v8};
    // v27 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
    const v28 = v26 + 1;
    // v28 = .primitive
    v26 = v28;
} while (v26 < 5);
let v44 = 0;
const v45 = v44 + 1;
// v45 = .primitive
v44 = v45;
let v48 = 0;
const v49 = 13.37 - 1;
// v49 = .primitive
const v50 = v48 + 1;
// v50 = .primitive
v48 = v50;
const v57 = Symbol.species;
// v57 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Symbol[v57] = 13.37;
const v65 = new Int16Array(19873);
// v65 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
const v66 = {..."object",...1337,...v65,..."byteOffset"};
// v66 = .object(ofGroup: Object, withProperties: ["constructor", "byteOffset", "length", "buffer", "byteLength", "__proto__"], withMethods: ["findIndex", "every", "filter", "charCodeAt", "map", "endsWith", "find", "concat", "substring", "copyWithin", "reduceRight", "forEach", "entries", "indexOf", "slice", "reverse", "padEnd", "join", "values", "startsWith", "lastIndexOf", "repeat", "includes", "charAt", "trim", "reduce", "fill", "replace", "padStart", "codePointAt", "subarray", "split", "keys", "some", "sort", "set"])
}
%NeverOptimizeFunction(main);
main();

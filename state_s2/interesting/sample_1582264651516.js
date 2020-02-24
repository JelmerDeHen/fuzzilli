function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {__proto__:13.37,length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v9 = {__proto__:v8,length:v6,valueOf:3356252410};
// v9 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "__proto__"])
let v10 = v4;
const v13 = [13.37,13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v16 = [v13,v15,Uint16Array];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v18 = [13.37,13.37,13.37,13.37,13.37];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v21 = v18;
v21[1337] = v16;
const v28 = [13.37,13.37,13.37,13.37,13.37];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v29 = [v28,v28,v28];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v30 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v28,__proto__:v29};
// v30 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "b", "__proto__"])
const v31 = [v30];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v35 = 0;
const v36 = v35 + 1;
// v36 = .primitive
v35 = v36;
const v37 = new WeakMap(v31);
// v37 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["set", "delete", "get", "has"])
let v40 = 0;
const v41 = v40 + 1;
// v41 = .primitive
v40 = v41;
let v45 = 0;
for (const v46 in v21) {
}
const v53 = typeof -4294967295;
// v53 = .string
const v55 = v53 === "boolean";
// v55 = .boolean
const v56 = "boolean" && v55;
// v56 = .boolean
const v59 = new Uint16Array(41529);
// v59 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
const v60 = typeof v59;
// v60 = .string
const v62 = v60 === "undefined";
// v62 = .boolean
let v63 = "boolean";
if (v62) {
    let v64 = "boolean";
    try {
        const v65 = !"undefined";
        // v65 = .boolean
        v64 = v64;
    } catch(v66) {
        const v67 = "boolean" + 1;
        // v67 = .primitive
        v64 = v62;
    }
    v63 = v64;
} else {
    const v68 = {toString:"boolean",c:v53};
    // v68 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "toString"])
    v63 = v68;
}
const v71 = new Int8Array(33937);
// v71 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
const v74 = [13.37,13.37,13.37,13.37];
// v74 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v76 = [1337,1337];
// v76 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v77 = [1337,Promise];
// v77 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v78 = {constructor:-4294967295,__proto__:v74,toString:v74,d:-4294967295,length:v74,a:-4294967295};
// v78 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "a", "toString", "length", "constructor"])
const v79 = {e:13.37,valueOf:v74,__proto__:v76,toString:v76,a:v74,d:v74};
// v79 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "e", "a", "valueOf", "d"])
let v80 = v77;
const v83 = new Set("ZXcohswA4Q");
// v83 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["forEach", "delete", "clear", "entries", "values", "keys", "has", "add"])
const v84 = v83.__proto__;
// v84 = .object()
"string"[-9007199254740993] = v62;
with (v79) {
    __proto__ = v59;
    const v85 = {e:Promise,__proto__:1337,d:Uint16Array,...v56,...v74,...v80,...v59};
    // v85 = .object(ofGroup: Object, withProperties: ["length", "byteLength", "d", "__proto__", "constructor", "e", "byteOffset", "buffer"], withMethods: ["flat", "join", "copyWithin", "keys", "splice", "toString", "set", "sort", "lastIndexOf", "reduce", "subarray", "filter", "map", "pop", "forEach", "unshift", "concat", "some", "findIndex", "values", "indexOf", "fill", "every", "shift", "reduceRight", "flatMap", "entries", "includes", "reverse", "toLocaleString", "push", "find", "slice"])
}
const v86 = v78 || v76;
// v86 = .boolean
let v89 = 0;
const v90 = v89 + 1;
// v90 = .primitive
v89 = v90;
let v95 = 70054082;
const v96 = v95 + 1;
// v96 = .primitive
v95 = v96;
const v97 = gc();
// v97 = .undefined
let v99 = 0;
}
%NeverOptimizeFunction(main);
main();

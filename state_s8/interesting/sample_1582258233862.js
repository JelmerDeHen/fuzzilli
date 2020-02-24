function main() {
const v2 = typeof -4294967295;
// v2 = .string
const v4 = v2 === "boolean";
// v4 = .boolean
const v5 = "boolean" && v4;
// v5 = .boolean
const v8 = new Uint16Array(41529);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
const v9 = typeof v8;
// v9 = .string
const v11 = v9 === "undefined";
// v11 = .boolean
let v12 = "boolean";
if (v11) {
    let v13 = "boolean";
    try {
        const v14 = !"undefined";
        // v14 = .boolean
        v13 = v13;
    } catch(v15) {
        const v16 = "boolean" + 1;
        // v16 = .primitive
        v13 = v11;
    }
    v12 = v13;
} else {
    const v17 = {toString:"boolean",c:v2};
    // v17 = .object(ofGroup: Object, withProperties: ["c", "toString", "__proto__"])
    v12 = v17;
}
const v20 = new Int8Array(33937);
// v20 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v23 = [13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v25 = [1337,1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v26 = [1337,Promise];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v27 = {constructor:-4294967295,__proto__:v23,toString:v23,d:-4294967295,length:v23,a:-4294967295};
// v27 = .object(ofGroup: Object, withProperties: ["a", "constructor", "__proto__", "d", "toString", "length"])
const v28 = {e:13.37,valueOf:v23,__proto__:v25,toString:v25,a:v23,d:v23};
// v28 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "a", "__proto__", "d", "toString"])
let v29 = v26;
const v32 = new Set("ZXcohswA4Q");
// v32 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "clear", "keys", "add", "forEach", "values", "entries", "has"])
const v33 = v32.__proto__;
// v33 = .object()
"string"[-9007199254740993] = v11;
with (v28) {
    __proto__ = v8;
    const v34 = {e:Promise,__proto__:1337,d:Uint16Array,...v5,...v23,...v29,...v8};
    // v34 = .object(ofGroup: Object, withProperties: ["constructor", "e", "__proto__", "byteLength", "byteOffset", "d", "buffer", "length"], withMethods: ["lastIndexOf", "indexOf", "keys", "includes", "shift", "concat", "flat", "sort", "map", "reduce", "find", "reduceRight", "pop", "fill", "join", "unshift", "filter", "copyWithin", "every", "flatMap", "toLocaleString", "some", "subarray", "toString", "forEach", "slice", "splice", "push", "entries", "values", "reverse", "findIndex", "set"])
}
const v35 = v27 || v25;
// v35 = .boolean
let v38 = 0;
const v39 = v38 + 1;
// v39 = .primitive
v38 = v39;
let v44 = 70054082;
const v45 = v44 + 1;
// v45 = .primitive
v44 = v45;
const v46 = gc();
// v46 = .undefined
}
%NeverOptimizeFunction(main);
main();

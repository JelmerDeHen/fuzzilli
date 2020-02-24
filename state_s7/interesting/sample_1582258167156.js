function main() {
const v2 = typeof -4294967295;
// v2 = .string
const v4 = v2 === "boolean";
// v4 = .boolean
const v5 = "boolean" && v4;
// v5 = .boolean
const v8 = new Uint16Array(41529);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
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
    // v17 = .object(ofGroup: Object, withProperties: ["toString", "c", "__proto__"])
    v12 = v17;
}
const v20 = new Int8Array(33937);
// v20 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
const v23 = [13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v25 = [1337,1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v26 = [1337,Promise];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v27 = {constructor:-4294967295,__proto__:v23,toString:v23,d:-4294967295,length:v23,a:-4294967295};
// v27 = .object(ofGroup: Object, withProperties: ["length", "a", "constructor", "__proto__", "d", "toString"])
const v28 = {e:13.37,valueOf:v23,__proto__:v25,toString:v25,a:v23,d:v23};
// v28 = .object(ofGroup: Object, withProperties: ["d", "toString", "e", "valueOf", "__proto__", "a"])
let v29 = v26;
const v32 = new Set("ZXcohswA4Q");
// v32 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["add", "clear", "keys", "values", "entries", "delete", "forEach", "has"])
const v33 = v32.__proto__;
// v33 = .object()
"string"[-9007199254740993] = v11;
with (v28) {
    __proto__ = v8;
    const v34 = {e:Promise,__proto__:1337,d:Uint16Array,...v5,...v23,...v29,...v8};
    // v34 = .object(ofGroup: Object, withProperties: ["byteLength", "__proto__", "e", "buffer", "byteOffset", "constructor", "length", "d"], withMethods: ["copyWithin", "flatMap", "indexOf", "reduce", "pop", "keys", "some", "toString", "concat", "shift", "forEach", "lastIndexOf", "unshift", "push", "set", "sort", "slice", "entries", "map", "findIndex", "find", "splice", "includes", "toLocaleString", "values", "join", "flat", "every", "filter", "fill", "reduceRight", "subarray", "reverse"])
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

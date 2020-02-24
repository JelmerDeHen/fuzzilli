function main() {
const v2 = typeof -4294967295;
// v2 = .string
const v4 = v2 === "boolean";
// v4 = .boolean
const v5 = "boolean" && v4;
// v5 = .boolean
const v8 = new Uint16Array(41529);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
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
// v20 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
const v23 = [13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v25 = [1337,1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v26 = [1337,Promise];
// v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v27 = {constructor:-4294967295,__proto__:v23,toString:v23,d:-4294967295,length:v23,a:-4294967295};
// v27 = .object(ofGroup: Object, withProperties: ["length", "d", "a", "toString", "__proto__", "constructor"])
const v28 = {e:13.37,valueOf:v23,__proto__:v25,toString:v25,a:v23,d:v23};
// v28 = .object(ofGroup: Object, withProperties: ["a", "d", "valueOf", "__proto__", "toString", "e"])
let v29 = v26;
const v32 = new Set("ZXcohswA4Q");
// v32 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "delete", "values", "has", "forEach", "add", "entries"])
const v33 = v32.__proto__;
// v33 = .object()
"string"[-9007199254740993] = v11;
with (v28) {
    __proto__ = v8;
    const v34 = {e:Promise,__proto__:1337,d:Uint16Array,...v5,...v23,...v29,...v8};
    // v34 = .object(ofGroup: Object, withProperties: ["e", "d", "buffer", "__proto__", "length", "byteOffset", "constructor", "byteLength"], withMethods: ["splice", "push", "flatMap", "slice", "join", "includes", "subarray", "map", "values", "copyWithin", "flat", "reverse", "reduceRight", "keys", "pop", "find", "entries", "fill", "forEach", "toLocaleString", "shift", "toString", "reduce", "set", "concat", "every", "findIndex", "some", "sort", "unshift", "filter", "indexOf", "lastIndexOf"])
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

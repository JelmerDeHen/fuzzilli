function main() {
const v2 = typeof -4294967295;
// v2 = .string
const v4 = v2 === "boolean";
// v4 = .boolean
const v5 = "boolean" && v4;
// v5 = .boolean
const v8 = new Uint16Array(41529);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
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
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "toString"])
    v12 = v17;
}
const v20 = new Int8Array(33937);
// v20 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reduce", "sort", "copyWithin", "set", "fill", "slice", "reverse", "includes", "lastIndexOf", "join", "find", "entries", "findIndex", "indexOf", "keys", "forEach", "filter", "map", "every", "subarray", "some", "reduceRight", "values"])
const v23 = [13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v25 = [1337,1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v26 = [1337,Promise];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v27 = {constructor:-4294967295,__proto__:v23,toString:v23,d:-4294967295,length:v23,a:-4294967295};
// v27 = .object(ofGroup: Object, withProperties: ["length", "a", "d", "constructor", "__proto__", "toString"])
const v28 = {e:13.37,valueOf:v23,__proto__:v25,toString:v25,a:v23,d:v23};
// v28 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "d", "toString", "e", "valueOf"])
let v29 = v26;
const v32 = new Set("ZXcohswA4Q");
// v32 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "add", "forEach", "has", "clear", "keys", "values", "entries"])
const v33 = v32.__proto__;
// v33 = .object()
"string"[-9007199254740993] = v11;
with (v28) {
    __proto__ = v8;
    const v34 = {e:Promise,__proto__:1337,d:Uint16Array,...v5,...v23,...v29,...v8};
    // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "buffer", "byteOffset", "d", "length", "byteLength", "e"], withMethods: ["find", "concat", "some", "indexOf", "copyWithin", "keys", "set", "every", "flatMap", "filter", "includes", "shift", "sort", "unshift", "reduce", "pop", "toString", "reverse", "values", "map", "forEach", "reduceRight", "subarray", "lastIndexOf", "toLocaleString", "fill", "entries", "splice", "join", "findIndex", "push", "flat", "slice"])
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

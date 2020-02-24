function main() {
const v2 = typeof -4294967295;
// v2 = .string
const v4 = v2 === "boolean";
// v4 = .boolean
const v5 = "boolean" && v4;
// v5 = .boolean
const v8 = new Uint16Array(41529);
// v8 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
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
// v20 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
const v23 = [13.37,13.37,13.37,13.37];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v25 = [1337,1337];
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v26 = [1337,Promise];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v27 = {constructor:-4294967295,__proto__:v23,toString:v23,d:-4294967295,length:v23,a:-4294967295};
// v27 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "d", "constructor", "a", "toString"])
const v28 = {e:13.37,valueOf:v23,__proto__:v25,toString:v25,a:v23,d:v23};
// v28 = .object(ofGroup: Object, withProperties: ["toString", "a", "d", "__proto__", "e", "valueOf"])
let v29 = v26;
const v32 = new Set("ZXcohswA4Q");
// v32 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "add", "forEach", "has", "entries", "values", "delete"])
const v33 = v32.__proto__;
// v33 = .object()
"string"[-9007199254740993] = v11;
with (v28) {
    __proto__ = v8;
    const v34 = {e:Promise,__proto__:1337,d:Uint16Array,...v5,...v23,...v29,...v8};
    // v34 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d", "buffer", "byteOffset", "length", "byteLength", "e"], withMethods: ["reduceRight", "push", "forEach", "reduce", "sort", "subarray", "set", "map", "copyWithin", "every", "keys", "includes", "find", "join", "reverse", "splice", "pop", "slice", "values", "flat", "toLocaleString", "some", "fill", "concat", "findIndex", "entries", "flatMap", "filter", "toString", "indexOf", "unshift", "lastIndexOf", "shift"])
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

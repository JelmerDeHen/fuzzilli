function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:1337,toString:-684191358,c:v4};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "c", "__proto__"])
const v9 = {constructor:v6,__proto__:"undefined",toString:v8};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "constructor"])
let v10 = WeakSet;
function v12(v13,v14) {
    const v16 = {__proto__:536870912};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v16) {
        __proto__[0] = __proto__;
    }
    return 536870912;
}
const v19 = v12(1024,4.0);
// v19 = .unknown
let v22 = 1903240934;
const v24 = new Int8Array(v22);
// v24 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v30 = [1.7976931348623157e+308];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v32 = [-9007199254740991,-9007199254740991,-9007199254740991];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v33 = {a:-9007199254740991,toString:1.7976931348623157e+308,c:v30,__proto__:v32,valueOf:"object",constructor:"gM8oAednYn"};
// v33 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor", "c", "toString", "valueOf"])
const v34 = {toString:v30,valueOf:v33,d:-9007199254740991,constructor:-9007199254740992};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "toString", "valueOf", "d"])
const v35 = RegExp.apply(v34,RegExp);
// v35 = .unknown
let v38 = "isConcatSpreadable";
let v41 = 971212035;
for (const v43 in v38) {
    try {
        const v44 = typeof -2191158840;
        // v44 = .string
        const v45 = v44 === Uint8Array;
        // v45 = .boolean
        const v46 = v41.toLocaleString(v43,v45,1337);
        // v46 = .unknown
    } catch(v47) {
    }
}
const v48 = "object".split(v35,-9007199254740991);
// v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
for (const v49 in v38) {
}
const v51 = v12(v22,v10);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();

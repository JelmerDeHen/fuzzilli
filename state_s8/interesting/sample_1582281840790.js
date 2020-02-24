function main() {
function v1(v2,v3) {
    const v5 = {__proto__:536870912};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v5) {
        __proto__[0] = __proto__;
    }
}
const v8 = v1(1024,4.0);
// v8 = .unknown
let v11 = 1903240934;
const v13 = new Int8Array(v11);
// v13 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v19 = [1.7976931348623157e+308];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v21 = [-9007199254740991,-9007199254740991,-9007199254740991];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v22 = {a:-9007199254740991,toString:1.7976931348623157e+308,c:v19,__proto__:v21,valueOf:"object",constructor:"gM8oAednYn"};
// v22 = .object(ofGroup: Object, withProperties: ["a", "constructor", "toString", "valueOf", "__proto__", "c"])
const v23 = {toString:v19,valueOf:v22,d:-9007199254740991,constructor:-9007199254740992};
// v23 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "d", "toString", "__proto__"])
const v24 = RegExp.apply(v23,RegExp);
// v24 = .unknown
const v25 = "object".split(v24,-9007199254740991);
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

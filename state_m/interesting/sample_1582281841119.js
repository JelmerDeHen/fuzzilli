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
// v13 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
const v19 = [1.7976931348623157e+308];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v21 = [-9007199254740991,-9007199254740991,-9007199254740991];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v22 = {a:-9007199254740991,toString:1.7976931348623157e+308,c:v19,__proto__:v21,valueOf:"object",constructor:"gM8oAednYn"};
// v22 = .object(ofGroup: Object, withProperties: ["toString", "constructor", "a", "valueOf", "c", "__proto__"])
const v23 = {toString:v19,valueOf:v22,d:-9007199254740991,constructor:-9007199254740992};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "toString", "d", "constructor"])
const v24 = RegExp.apply(v23,RegExp);
// v24 = .unknown
const v25 = "object".split(v24,-9007199254740991);
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
%NeverOptimizeFunction(main);
main();

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
// v13 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "constructor", "buffer", "byteLength", "__proto__", "length"], withMethods: ["values", "copyWithin", "fill", "join", "keys", "sort", "entries", "forEach", "subarray", "some", "map", "reduceRight", "reduce", "lastIndexOf", "filter", "findIndex", "reverse", "every", "set", "includes", "find", "slice", "indexOf"])
const v19 = [1.7976931348623157e+308];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v21 = [-9007199254740991,-9007199254740991,-9007199254740991];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v22 = {a:-9007199254740991,toString:1.7976931348623157e+308,c:v19,__proto__:v21,valueOf:"object",constructor:"gM8oAednYn"};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "constructor", "a", "c", "valueOf"])
const v23 = {toString:v19,valueOf:v22,d:-9007199254740991,constructor:-9007199254740992};
// v23 = .object(ofGroup: Object, withProperties: ["d", "toString", "valueOf", "constructor", "__proto__"])
const v24 = RegExp.apply(v23,RegExp);
// v24 = .unknown
const v25 = "object".split(v24,-9007199254740991);
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
}
%NeverOptimizeFunction(main);
main();

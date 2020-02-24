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
// v13 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
const v19 = [1.7976931348623157e+308];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v21 = [-9007199254740991,-9007199254740991,-9007199254740991];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v22 = {a:-9007199254740991,toString:1.7976931348623157e+308,c:v19,__proto__:v21,valueOf:"object",constructor:"gM8oAednYn"};
// v22 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "a", "toString", "c", "constructor"])
const v23 = {toString:v19,valueOf:v22,d:-9007199254740991,constructor:-9007199254740992};
// v23 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "__proto__", "d", "constructor"])
const v24 = RegExp.apply(v23,RegExp);
// v24 = .unknown
const v25 = "object".split(v24,-9007199254740991);
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
}
%NeverOptimizeFunction(main);
main();

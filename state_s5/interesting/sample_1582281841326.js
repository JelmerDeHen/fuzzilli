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
// v13 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
const v19 = [1.7976931348623157e+308];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v21 = [-9007199254740991,-9007199254740991,-9007199254740991];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v22 = {a:-9007199254740991,toString:1.7976931348623157e+308,c:v19,__proto__:v21,valueOf:"object",constructor:"gM8oAednYn"};
// v22 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c", "toString", "valueOf", "a"])
const v23 = {toString:v19,valueOf:v22,d:-9007199254740991,constructor:-9007199254740992};
// v23 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "__proto__", "d", "valueOf"])
const v24 = RegExp.apply(v23,RegExp);
// v24 = .unknown
const v25 = "object".split(v24,-9007199254740991);
// v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
%NeverOptimizeFunction(main);
main();

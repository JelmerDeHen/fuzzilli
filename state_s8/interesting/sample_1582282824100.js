function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {constructor:v7,toString:v6,a:v7,c:v7,__proto__:isFinite,length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["c", "length", "toString", "__proto__", "constructor", "a"], withMethods: ["__proto__"])
const v9 = {toString:13.37,length:1337};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "length"])
let v10 = -4261300175;
function v12(v13,v14) {
    const v16 = {__proto__:536870912};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v16) {
        __proto__[0] = __proto__;
    }
    return v14;
}
const v19 = v12(1024,4.0);
// v19 = .unknown
let v22 = 1903240934;
const v24 = new Int8Array(v6);
// v24 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v30 = [1.7976931348623157e+308];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v32 = [255,255,255];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v33 = {a:255,toString:isFinite,c:v30,__proto__:v32,valueOf:"object",constructor:"gM8oAednYn"};
// v33 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "constructor", "valueOf", "a"], withMethods: ["toString"])
const v34 = {toString:v30,valueOf:v33,d:255,constructor:536870912};
// v34 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "valueOf", "toString"])
const v35 = RegExp.apply(v34,RegExp);
// v35 = .unknown
const v36 = "object".split(v35,255);
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

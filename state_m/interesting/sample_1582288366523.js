function main() {
function v5(v6,v7) {
    let v11 = 0;
    const v21 = 1337 == v6;
    // v21 = .boolean
    let v24 = 0;
    let v27 = 0;
}
const v29 = [13.37,13.37,13.37,13.37];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v32(v33,v34) {
    const v36 = {__proto__:536870912};
    // v36 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v38 = [13.37,13.37,13.37];
    // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
const v44 = [1.7976931348623157e+308];
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v46 = [255,255,255];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v47 = {a:255,toString:isFinite,c:v44,__proto__:v46,valueOf:"object",constructor:"gM8oAednYn"};
// v47 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "a", "c", "__proto__"], withMethods: ["toString"])
const v48 = {toString:v44,valueOf:v47,d:255,constructor:536870912};
// v48 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString", "valueOf", "constructor"])
const v49 = RegExp.apply(v48,RegExp);
// v49 = .unknown
const v50 = {construct:v49,get:Object,call:v32};
// v50 = .object(ofGroup: Object, withProperties: ["__proto__", "construct"], withMethods: ["get", "call"])
const v52 = new Proxy(v29,v50);
// v52 = .unknown
with (v52) {
    length = -4261300175;
}
}
%NeverOptimizeFunction(main);
main();

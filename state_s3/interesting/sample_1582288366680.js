function main() {
function v5(v6,v7) {
    let v11 = 0;
    const v21 = 1337 == v6;
    // v21 = .boolean
    let v24 = 0;
    let v27 = 0;
}
const v29 = [13.37,13.37,13.37,13.37];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v32(v33,v34) {
    const v36 = {__proto__:536870912};
    // v36 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v38 = [13.37,13.37,13.37];
    // v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
}
const v44 = [1.7976931348623157e+308];
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v46 = [255,255,255];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v47 = {a:255,toString:isFinite,c:v44,__proto__:v46,valueOf:"object",constructor:"gM8oAednYn"};
// v47 = .object(ofGroup: Object, withProperties: ["a", "c", "constructor", "__proto__", "valueOf"], withMethods: ["toString"])
const v48 = {toString:v44,valueOf:v47,d:255,constructor:536870912};
// v48 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "toString", "constructor", "valueOf"])
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

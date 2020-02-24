function main() {
function v1(v2,v3) {
    return 536870912;
}
const v9 = [1.7976931348623157e+308];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v11 = [255,255,255];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = {a:255,toString:isFinite,c:v9,__proto__:v11,valueOf:"object",constructor:RegExp};
// v12 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a", "valueOf"], withMethods: ["constructor", "toString"])
const v14 = {toString:v9,valueOf:v12,d:255,constructor:536870912};
// v14 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "valueOf", "constructor"])
const v15 = RegExp.apply(v14,RegExp);
// v15 = .unknown
const v16 = "2IdSaX90v.".replace(v15,v1);
// v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();

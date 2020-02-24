function main() {
const v1 = {__proto__:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
with (v1) {
    __proto__[0] = __proto__;
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v9 = [-1024,-1024,-1024];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v10 = {a:-1024,toString:13.37,c:v7,__proto__:v9,valueOf:"a",constructor:v7};
    // v10 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "a", "__proto__", "c", "constructor"])
    const v11 = {toString:v7,valueOf:v10,d:-1024,constructor:-9007199254740992};
    // v11 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf", "d", "constructor"])
    const v12 = RegExp.apply(v11,RegExp);
    // v12 = .unknown
    const v13 = "a".split(v12,-1024);
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
}
}
%NeverOptimizeFunction(main);
main();

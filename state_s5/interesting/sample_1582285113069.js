function main() {
const v1 = {__proto__:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
with (v1) {
    __proto__[0] = __proto__;
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v9 = [-1024,-1024,-1024];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v10 = {a:-1024,toString:13.37,c:v7,__proto__:v9,valueOf:"a",constructor:v7};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c", "valueOf", "constructor", "toString"])
    const v11 = {toString:v7,valueOf:v10,d:-1024,constructor:-9007199254740992};
    // v11 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "constructor", "toString"])
    const v12 = RegExp.apply(v11,RegExp);
    // v12 = .unknown
    const v13 = "a".split(v12,-1024);
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
}
%NeverOptimizeFunction(main);
main();

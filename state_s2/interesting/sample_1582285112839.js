function main() {
const v1 = {__proto__:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
with (v1) {
    __proto__[0] = __proto__;
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v9 = [-1024,-1024,-1024];
    // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v10 = {a:-1024,toString:13.37,c:v7,__proto__:v9,valueOf:"a",constructor:v7};
    // v10 = .object(ofGroup: Object, withProperties: ["c", "toString", "a", "__proto__", "valueOf", "constructor"])
    const v11 = {toString:v7,valueOf:v10,d:-1024,constructor:-9007199254740992};
    // v11 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "toString", "valueOf"])
    const v12 = RegExp.apply(v11,RegExp);
    // v12 = .unknown
    const v13 = "a".split(v12,-1024);
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
}
%NeverOptimizeFunction(main);
main();

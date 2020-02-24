function main() {
const v1 = {__proto__:13.37};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
with (v1) {
    __proto__[0] = __proto__;
    const v7 = [13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v9 = [-1024,-1024,-1024];
    // v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v10 = {a:-1024,toString:13.37,c:v7,__proto__:v9,valueOf:"a",constructor:v7};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor", "toString", "a", "c"])
    const v11 = {toString:v7,valueOf:v10,d:-1024,constructor:-9007199254740992};
    // v11 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "d", "toString", "__proto__"])
    const v12 = RegExp.apply(v11,RegExp);
    // v12 = .unknown
    const v13 = "a".split(v12,-1024);
    // v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
}
%NeverOptimizeFunction(main);
main();

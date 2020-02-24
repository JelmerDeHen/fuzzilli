function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [v4,v6];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v8 = {constructor:"OQrlgqwgVv",b:1337,valueOf:1337,a:v6,e:9007199254740992};
// v8 = .object(ofGroup: Object, withProperties: ["e", "constructor", "a", "b", "valueOf", "__proto__"])
const v9 = {e:13.37,__proto__:v7,d:v7};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
let v10 = "OQrlgqwgVv";
const v13 = {constructor:"symbol",length:9007199254740993};
// v13 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v16 = [13.37,13.37,13.37];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v17 = [];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = v16[Function];
// v18 = .unknown
with (v9) {
    b = "OQrlgqwgVv";
    const v20 = {set:v18};
    // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
    const v22 = Object.defineProperty(v17,-2147483648,v20);
    // v22 = .undefined
}
try {
    const v23 = v18(v17,v13);
    // v23 = .unknown
} catch(v24) {
    v13.d = v24;
}
}
%NeverOptimizeFunction(main);
main();

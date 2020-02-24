function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {valueOf:"e",length:1337,a:v2,b:v2,e:1337};
// v3 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "__proto__", "length", "b", "e"])
for (let v9 = 0; v9 < 100; v9++) {
    const v10 = v9 instanceof Number;
    // v10 = .boolean
}
for (let v14 = 0; v14 < 5; v14++) {
    const v15 = v2[9007199254740991];
    // v15 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

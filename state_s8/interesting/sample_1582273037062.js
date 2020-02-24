function main() {
const v2 = {length:"P.9lS69Z4n",c:-65536};
// v2 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "length"])
const v6 = [3156875969,3156875969,1337,DataView];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
for (const v7 in v2) {
    const v9 = Reflect.set(Reflect,v7,1337,v6);
    // v9 = .boolean
}
}
%NeverOptimizeFunction(main);
main();

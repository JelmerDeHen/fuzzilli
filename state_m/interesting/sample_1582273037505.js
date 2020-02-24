function main() {
const v2 = {length:"P.9lS69Z4n",c:-65536};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "length"])
const v6 = [3156875969,3156875969,1337,DataView];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
for (const v7 in v2) {
    const v9 = Reflect.set(Reflect,v7,1337,v6);
    // v9 = .boolean
}
}
%NeverOptimizeFunction(main);
main();

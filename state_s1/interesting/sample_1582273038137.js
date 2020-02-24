function main() {
const v2 = {length:"P.9lS69Z4n",c:-65536};
// v2 = .object(ofGroup: Object, withProperties: ["c", "length", "__proto__"])
const v6 = [3156875969,3156875969,1337,DataView];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
for (const v7 in v2) {
    const v9 = Reflect.set(Reflect,v7,1337,v6);
    // v9 = .boolean
}
}
%NeverOptimizeFunction(main);
main();

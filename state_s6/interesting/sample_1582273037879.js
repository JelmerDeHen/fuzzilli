function main() {
const v2 = {length:"P.9lS69Z4n",c:-65536};
// v2 = .object(ofGroup: Object, withProperties: ["length", "c", "__proto__"])
const v6 = [3156875969,3156875969,1337,DataView];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
for (const v7 in v2) {
    const v9 = Reflect.set(Reflect,v7,1337,v6);
    // v9 = .boolean
}
}
%NeverOptimizeFunction(main);
main();

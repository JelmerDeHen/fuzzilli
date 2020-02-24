function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {length:v3,toString:"MAX_SAFE_INTEGER",e:1337,d:1337};
// v5 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d", "length", "toString"])
try {
    let v8 = 0;
    const v9 = gc(v8,...1337,13.37,0,...v5);
    // v9 = .undefined
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();

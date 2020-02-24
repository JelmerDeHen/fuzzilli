function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [Float64Array,-1773153690,1337,v4];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {a:v6,valueOf:v4,c:Float64Array,length:"g3lWuYSlmh",__proto__:-1773153690,toString:v4,b:v4,d:"g3lWuYSlmh"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "d", "c", "valueOf", "length", "b", "a"])
try {
    const v9 = JSON.parse(v7);
    // v9 = .unknown
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();

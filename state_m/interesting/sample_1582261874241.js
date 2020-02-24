function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [Float64Array,-1773153690,1337,v4];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {a:v6,valueOf:v4,c:Float64Array,length:"g3lWuYSlmh",__proto__:-1773153690,toString:v4,b:v4,d:"g3lWuYSlmh"};
// v7 = .object(ofGroup: Object, withProperties: ["toString", "d", "b", "length", "a", "valueOf", "__proto__", "c"])
try {
    const v9 = JSON.parse(v7);
    // v9 = .unknown
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();

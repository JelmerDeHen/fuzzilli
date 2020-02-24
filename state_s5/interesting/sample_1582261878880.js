function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [Float64Array,-1773153690,1337,v4];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = {a:v6,valueOf:v4,c:Float64Array,length:"g3lWuYSlmh",__proto__:-1773153690,toString:v4,b:v4,d:"g3lWuYSlmh"};
// v7 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "b", "c", "length", "toString", "a", "__proto__"])
try {
    const v9 = JSON.parse(v7);
    // v9 = .unknown
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();

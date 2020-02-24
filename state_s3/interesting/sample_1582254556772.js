function main() {
const v10 = [];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = {valueOf:v10,length:13.37,d:127,e:127};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "length", "valueOf"])
const v12 = {c:v10,valueOf:v11,d:Array,a:1337};
// v12 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "c", "__proto__"], withMethods: ["d"])
for (let v24 = 0; v24 < 100; v24++) {
}
const v26 = v12.d(13.37,127);
// v26 = .unknown
for (const v27 in "pvU0UUjoya") {
    const v28 = Object(...v27,0);
    // v28 = .object()
}
}
%NeverOptimizeFunction(main);
main();

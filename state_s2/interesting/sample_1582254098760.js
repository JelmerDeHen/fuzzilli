function main() {
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {valueOf:v5,length:13.37,d:127,e:127};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "e", "d"])
const v7 = {c:v5,valueOf:v6,d:Array,a:1337};
// v7 = .object(ofGroup: Object, withProperties: ["a", "c", "valueOf", "__proto__"], withMethods: ["d"])
for (const v8 of "pvU0UUjoya") {
    with (v6) {
        length = v7;
    }
}
}
%NeverOptimizeFunction(main);
main();

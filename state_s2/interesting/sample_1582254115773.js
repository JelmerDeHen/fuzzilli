function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = {valueOf:v6,length:13.37,d:127,e:127};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "d", "length"])
for (let v11 = 0; v11 < 6; v11++) {
    const v13 = {get:Array,set:Array};
    // v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v15 = Object.defineProperty(v2,65536,v13);
    // v15 = .undefined
}
}
%NeverOptimizeFunction(main);
main();

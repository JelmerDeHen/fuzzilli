function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [Uint8Array];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v10 = -1024;
while (v10 < 5) {
    const v12 = Object.defineProperty(v7,v10,Uint8ClampedArray);
    // v12 = .undefined
    const v13 = v10 + 1;
    // v13 = .primitive
    v10 = v13;
}
const v14 = (65536)[v4];
// v14 = .unknown
const v15 = {valueOf:v7,length:-1024,...v7,...v2};
// v15 = .object(ofGroup: Object, withProperties: ["length", "constructor", "valueOf", "__proto__"], withMethods: ["find", "splice", "indexOf", "toString", "concat", "join", "includes", "pop", "sort", "values", "flatMap", "findIndex", "reverse", "toLocaleString", "keys", "fill", "some", "map", "flat", "copyWithin", "push", "shift", "filter", "reduce", "reduceRight", "unshift", "entries", "every", "forEach", "lastIndexOf", "slice"])
}
%NeverOptimizeFunction(main);
main();

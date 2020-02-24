function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [Uint8Array];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
// v15 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length", "valueOf"], withMethods: ["reverse", "indexOf", "slice", "reduceRight", "push", "flat", "flatMap", "lastIndexOf", "splice", "values", "sort", "join", "includes", "pop", "reduce", "find", "shift", "every", "copyWithin", "forEach", "map", "toLocaleString", "some", "fill", "keys", "unshift", "entries", "filter", "toString", "concat", "findIndex"])
}
%NeverOptimizeFunction(main);
main();

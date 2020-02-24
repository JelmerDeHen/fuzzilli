function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [Uint8Array];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "valueOf", "constructor"], withMethods: ["indexOf", "push", "copyWithin", "slice", "reduceRight", "entries", "filter", "find", "includes", "findIndex", "flatMap", "keys", "sort", "every", "fill", "unshift", "lastIndexOf", "map", "flat", "reverse", "forEach", "pop", "concat", "splice", "some", "join", "toString", "values", "toLocaleString", "shift", "reduce"])
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [Uint8Array];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
// v15 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "length"], withMethods: ["flatMap", "unshift", "reduce", "concat", "sort", "map", "includes", "reverse", "toLocaleString", "values", "copyWithin", "splice", "keys", "some", "every", "push", "lastIndexOf", "shift", "find", "entries", "slice", "indexOf", "pop", "reduceRight", "forEach", "fill", "filter", "findIndex", "toString", "join", "flat"])
}
%NeverOptimizeFunction(main);
main();

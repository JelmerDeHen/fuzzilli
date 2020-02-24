function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [Uint8Array];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor", "length"], withMethods: ["reverse", "toString", "toLocaleString", "includes", "lastIndexOf", "splice", "entries", "reduce", "values", "pop", "fill", "sort", "shift", "unshift", "find", "join", "keys", "slice", "findIndex", "forEach", "reduceRight", "copyWithin", "filter", "concat", "flatMap", "map", "some", "flat", "indexOf", "push", "every"])
}
%NeverOptimizeFunction(main);
main();

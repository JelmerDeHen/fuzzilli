function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {toString:v3};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
const v6 = v4[-9007199254740992];
// v6 = .unknown
const v7 = {e:v6,__proto__:Int8Array,length:"function"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "e"])
for (let v11 = 0; v11 < 3; v11++) {
    const v14 = Object.seal(Int8Array);
    // v14 = .object()
}
}
%NeverOptimizeFunction(main);
main();

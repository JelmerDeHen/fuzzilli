function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {toString:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v6 = v4[-9007199254740992];
// v6 = .unknown
const v7 = {e:v6,__proto__:Int8Array,length:"function"};
// v7 = .object(ofGroup: Object, withProperties: ["length", "e", "__proto__"])
for (let v11 = 0; v11 < 3; v11++) {
    const v14 = Object.seal(Int8Array);
    // v14 = .object()
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {toString:v3};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
const v6 = v4[-9007199254740992];
// v6 = .unknown
const v7 = {e:v6,__proto__:Int8Array,length:"function"};
// v7 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__"])
for (let v11 = 0; v11 < 3; v11++) {
    const v14 = Object.seal(Int8Array);
    // v14 = .object()
}
}
%NeverOptimizeFunction(main);
main();

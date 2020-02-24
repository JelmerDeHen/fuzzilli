function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {toString:v3};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
const v6 = v4[-9007199254740992];
// v6 = .unknown
const v7 = {e:v6,__proto__:Int8Array,length:"function"};
// v7 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "length"])
for (let v11 = 0; v11 < 3; v11++) {
    const v14 = Object.seal(Int8Array);
    // v14 = .object()
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {toString:v3};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
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

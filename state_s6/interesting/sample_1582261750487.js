function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {b:13.37,length:v4,__proto__:3366735776,d:"undefined"};
// v5 = .object(ofGroup: Object, withProperties: ["b", "length", "__proto__", "d"])
function v6(v7,v8) {
    let v11 = 4294967297;
    while (v11 != 65537) {
        const v12 = v11 % 65537;
        // v12 = .number
        const v13 = v12 + 1;
        // v13 = .primitive
        v11 = v13;
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v16 = v15;
const v17 = v6(v16);
// v17 = .unknown
const v18 = v6(Uint8ClampedArray);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v5 = .object(ofGroup: Object, withProperties: ["e", "b", "d", "toString", "__proto__"])
let v6 = v3;
try {
    for (const v8 of v6) {
        const v9 = 4294967297 & v5;
        // v9 = .integer
    }
} catch(v10) {
}
const v11 = gc();
// v11 = .undefined
const v12 = gc();
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();

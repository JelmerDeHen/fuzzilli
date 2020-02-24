function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v5 = .object(ofGroup: Object, withProperties: ["toString", "d", "e", "b", "__proto__"])
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

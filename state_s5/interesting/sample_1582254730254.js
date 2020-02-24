function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v5 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "b", "toString", "e"])
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

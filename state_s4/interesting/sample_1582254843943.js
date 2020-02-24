function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v5 = .object(ofGroup: Object, withProperties: ["e", "d", "__proto__", "toString", "b"])
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

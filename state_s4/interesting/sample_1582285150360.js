function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v2 = v0;
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v7 = 1337;
v4[v2] = 1337;
for (const v9 in v4) {
    try {
        const v10 = typeof -2191158840;
        // v10 = .string
        const v11 = v10 === Uint8Array;
        // v11 = .boolean
        const v12 = v7.toLocaleString(v9,v11,1337);
        // v12 = .unknown
    } catch(v13) {
    }
}
}
%NeverOptimizeFunction(main);
main();

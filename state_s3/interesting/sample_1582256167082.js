function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "split") {
    let v9 = 0;
    do {
        try {
            const v11 = Symbol.toPrimitive;
            // v11 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            const v12 = undefined[v11];
            // v12 = .unknown
        } catch(v13) {
        }
        const v17 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString", "d", "e"])
        const v24 = typeof v17;
        // v24 = .string
        const v26 = v24 === "number";
        // v26 = .boolean
        const v27 = v9 + 1;
        // v27 = .primitive
        v9 = v27;
    } while (v9 < 8);
}
}
%NeverOptimizeFunction(main);
main();

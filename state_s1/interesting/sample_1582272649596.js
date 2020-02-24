function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v6 = parseInt.bind(parseInt);
        // v6 = .unknown
        for (const v8 in "boolean") {
            let v11 = 0;
            do {
                const v13 = Symbol.toStringTag;
                // v13 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
                const v14 = v13.toString(v6,v4,parseInt,v6);
                // v14 = .unknown
                const v15 = v11 + 1;
                // v15 = .primitive
                v11 = v15;
            } while (v11 < 8);
        }
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();

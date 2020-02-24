function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v6 = parseInt.bind(parseInt);
        // v6 = .unknown
        for (const v8 in "boolean") {
            let v11 = 0;
            do {
                const v13 = Symbol.toStringTag;
                // v13 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
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
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();

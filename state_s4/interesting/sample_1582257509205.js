function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v12 = 0;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                v12 = v13;
            } while (v12 < 7);
            let v19 = 0;
            const v21 = Symbol.toStringTag;
            // v21 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
            arguments[v21] = -4294967295;
            const v23 = v8 + 1;
            // v23 = .primitive
            v8 = v23;
        } while (v8 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v1(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();

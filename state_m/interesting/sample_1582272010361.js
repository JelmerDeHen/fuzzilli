function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        for (const v7 in "boolean") {
            let v10 = 0;
            do {
                let v13 = 0;
                const v14 = v13 + 1;
                // v14 = .primitive
                v13 = v14;
                const v15 = v10 + 1;
                // v15 = .primitive
                v10 = v15;
            } while (v10 < 8);
        }
        const v16 = ["pvU0UUjoya"];
        // v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v17 = v16.pop();
        // v17 = .unknown
        const v18 = v16.unshift(v17);
        // v18 = .integer
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v21 = v20;
const v22 = v0(v21);
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            v7 = v8;
        } while (v7 < 512);
        const v10 = [1337,1337,1337];
        // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        function v12(v13,v14) {
            for (let v18 = 0; v18 < 10; v18 = v18 + v13) {
            }
            for (const v19 in "boolean") {
                let v21 = 0;
                let v23 = 0;
            }
        }
        const v25 = v12(4000128315,4.0);
        // v25 = .unknown
        const v26 = v12(v10,v12);
        // v26 = .unknown
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();

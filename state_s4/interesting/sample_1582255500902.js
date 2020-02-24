function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v12 = [1337,1337];
            // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            Function.__proto__ = v12;
            let v13 = 0;
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
            let v17 = 0;
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
            let v21 = 0;
            do {
                const v22 = v21 + 1;
                // v22 = .primitive
                v21 = v22;
            } while (v21 < 3);
            const v23 = v7 + 1;
            // v23 = .primitive
            v7 = v23;
        } while (v7 < 8);
    }
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v0(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();

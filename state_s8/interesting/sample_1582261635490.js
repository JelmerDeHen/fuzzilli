function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            try {
                let v12 = 0;
                if (v4) {
                } else {
                    let v16 = 0;
                    do {
                    } while (v16 < 0);
                }
                for (const v17 of "undefined") {
                    const v19 = {set:v3};
                    // v19 = .object(ofGroup: Object, withProperties: ["__proto__", "set"])
                    const v21 = Object.defineProperty("eeeRbEqfAO","__proto__",v19);
                    // v21 = .undefined
                }
            } catch(v24) {
            }
            const v25 = v9 + 1;
            // v25 = .primitive
            v9 = v25;
        } while (v9 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v29 = v28;
const v30 = v2(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();

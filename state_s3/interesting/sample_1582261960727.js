function main() {
function v0(v1,v2) {
    let v9 = 0;
    try {
        let v12 = 0;
        const v15 = DataView(28997);
        // v15 = .unknown
    } catch(v16) {
        function v21(v22,v23) {
            for (const v25 in "undefined") {
                let v28 = 0;
                do {
                    let v31 = 0;
                    const v32 = v31 + 1;
                    // v32 = .primitive
                    v31 = v32;
                    const v33 = v28 + 1;
                    // v33 = .primitive
                    v28 = v33;
                } while (v28 < 8);
            }
            return v16;
        }
        const v35 = [1337];
        // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v36 = v35;
        const v37 = v21(v36);
        // v37 = .unknown
        const v38 = v21();
        // v38 = .unknown
    }
    const v45 = v9 + 1;
    // v45 = .primitive
    v9 = v45;
}
const v48 = [1337];
// v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v49 = v48;
const v50 = v0(v49);
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        for (const v8 in "object") {
            function v10(v11,v12) {
                let v15 = 0;
                for (const v16 in "boolean") {
                    let v19 = 0;
                    const v20 = v19 + 1;
                    // v20 = .primitive
                    v19 = v20;
                }
            }
            const v21 = v10();
            // v21 = .unknown
            const v22 = "N0Xx92zvHQ".__proto__;
            // v22 = .object()
            function v23(v24,v25) {
                for (const v27 in "boolean") {
                    let v30 = 0;
                    const v31 = v30 + 1;
                    // v31 = .primitive
                    v30 = v31;
                }
            }
            const v33 = [1337];
            // v33 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v34 = v33;
            const v35 = v23(v34);
            // v35 = .unknown
            for (const v37 in "replace") {
            }
            v22.toString = Number;
        }
    }
}
const v38 = v0();
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();

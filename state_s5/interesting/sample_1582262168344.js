function main() {
function v0(v1,v2) {
    let v5 = 0;
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            try {
                let v12 = 0;
                do {
                    const v13 = v12 + 1;
                    // v13 = .primitive
                    v12 = v13;
                } while (v12 < 7);
                function v14(v15,v16) {
                    for (let v23 = 0; v23 < 6; v23++) {
                        const v24 = {constructor:8,a:v6,b:v5};
                        // v24 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__", "a"])
                    }
                }
                const v26 = [1337];
                // v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                let v27 = v26;
                const v28 = v14(v27);
                // v28 = .unknown
            } catch(v29) {
            }
            const v30 = v9 + 1;
            // v30 = .primitive
            v9 = v30;
        } while (v9 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v33 = v32;
const v34 = v0(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();

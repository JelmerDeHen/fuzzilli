function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v1 = v0;
const v3 = Symbol.unscopables;
// v3 = .unknown
const v4 = v1[v3];
// v4 = .unknown
let v7 = 0;
while (v7 < 3) {
    function v9(v10,v11) {
        let v18 = 0;
        for (const v19 in "boolean") {
            let v22 = 0;
            do {
                try {
                    let v25 = 0;
                    const v27 = [1337];
                    // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                    let v28 = v27;
                    let v30 = undefined;
                    for (const v32 in "boolean") {
                        const v34 = [13.37,13.37,13.37,13.37];
                        // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
                        const v36 = {b:2147483647};
                        // v36 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
                        function v37(v38,v39) {
                        }
                        const v40 = v34.forEach(v37,v36);
                        // v40 = .undefined
                        let v43 = 0;
                        let v46 = 0;
                        const v47 = v43 + 1;
                        // v47 = .primitive
                        v43 = v47;
                    }
                    const v48 = v25 + 1;
                    // v48 = .primitive
                    v25 = v48;
                } catch(v49) {
                    let v52 = 0;
                }
                const v56 = v22 + 1;
                // v56 = .primitive
                let v63 = 0;
                let v66 = 0;
                let v69 = 0;
                v22 = v56;
            } while (v22 < 8);
        }
        const v73 = DataView + 1;
        // v73 = .primitive
        v18 = v73;
    }
    const v76 = [1337];
    // v76 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v77 = v76;
    const v78 = v9(v77);
    // v78 = .unknown
    const v79 = v7 + 1;
    // v79 = .primitive
    v7 = v79;
}
}
%NeverOptimizeFunction(main);
main();

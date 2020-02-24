function main() {
let v5 = 0;
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v11 = v5 + 1;
// v11 = .primitive
v5 = v11;
function v12(v13,v14) {
    let v18 = 0;
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v24 = 0;
            const v25 = v24 + 1;
            // v25 = .primitive
            function v29(v30,v31) {
                for (const v33 in "boolean") {
                    const v35 = [1337,1337];
                    // v35 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                    const v38 = [13.37,13.37];
                    // v38 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                    const v39 = [13.37,v38];
                    // v39 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                    const v40 = gc(...v35,...v39);
                    // v40 = .undefined
                    let v42 = 0;
                    for (const v44 of "pvU0UUjoya") {
                    }
                    const v45 = v42 + 1;
                    // v45 = .primitive
                    v42 = v45;
                }
            }
            const v47 = [1337];
            // v47 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v48 = v47;
            const v49 = v29(v48);
            // v49 = .unknown
            for (let v50 = 0; v50 < 4; v50++) {
                const v51 = v50 << DataView;
                // v51 = .integer
            }
            v24 = v25;
            let v53 = 0;
            const v54 = v22 + 1;
            // v54 = .primitive
            v22 = v54;
        } while (v22 < 8);
    }
    const v55 = v18 + 1;
    // v55 = .primitive
}
const v57 = [3156875969];
// v57 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v58 = v57;
const v59 = v12(v58);
// v59 = .unknown
const v60 = v12(13.37,"MAX_SAFE_INTEGER");
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();

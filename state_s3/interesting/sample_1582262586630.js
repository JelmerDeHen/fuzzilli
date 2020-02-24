function main() {
function v0(v1,v2) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            const v11 = {e:1337,toString:Promise};
            // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "e"])
            function v12(v13,v14) {
                for (const v15 in 1) {
                    let v18 = 0;
                    let v21 = 0;
                }
            }
            const v23 = [1337];
            // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            const v24 = new Promise(v12,Promise);
            // v24 = .object()
            let v25 = v23;
            const v26 = v12(v25);
            // v26 = .unknown
            let v29 = 0;
            const v30 = v29 + 1;
            // v30 = .primitive
            v29 = v30;
            const v31 = v8 + 1;
            // v31 = .primitive
            v8 = v31;
        } while (v8 < 8);
    }
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();

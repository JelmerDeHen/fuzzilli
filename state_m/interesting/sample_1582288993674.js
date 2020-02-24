function main() {
const v2 = {a:13.37,length:WeakSet};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            const v14 = v2.__proto__;
            // v14 = .object()
            const v15 = v13 + 1;
            // v15 = .primitive
            v13 = v15;
            const v17 = v4[0];
            // v17 = .unknown
            try {
            } catch(v18) {
            }
            const v19 = 13.37 | v7;
            // v19 = .integer
            v17.e = 0;
            let v20 = 0;
            const v21 = v20 != v19;
            // v21 = .boolean
            if (v21) {
            } else {
                let v24 = 0;
                while (v24 < 9) {
                }
            }
            function v25(v26,v27) {
            }
            const v28 = v10 + 1;
            // v28 = .primitive
            v10 = v28;
        } while (v10 < 8);
    }
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v31 = v30;
const v32 = v3(v31);
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v9 = 0;
        do {
            const v12 = [1337,1337,1337,1337];
            // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v13 = {b:2147483647};
            // v13 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
            function v14(v15,v16) {
                const v18 = [1337];
                // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                let v19 = v18;
                let v21 = undefined;
                function v22(v23,v24) {
                    const v26 = {ownKeys:v24,preventExtensions:v24,defineProperty:v22,getPrototypeOf:v24,deleteProperty:v24,has:v22,set:v23,apply:v24};
                    // v26 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "apply", "deleteProperty", "set", "__proto__", "ownKeys", "preventExtensions"], withMethods: ["has", "defineProperty"])
                    const v28 = new Proxy(v22,v26);
                    // v28 = .unknown
                    const v29 = {toString:0,...Proxy,...v22,...v28};
                    // v29 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
                }
                const v31 = [1337];
                // v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
                let v32 = v31;
                const v33 = v22(v32);
                // v33 = .unknown
            }
            const v34 = v12.findIndex(v14,v13);
            // v34 = .integer
            const v35 = v9 + 1;
            // v35 = .primitive
            v9 = v35;
        } while (v9 < 8);
        let v36 = 0;
        do {
            for (const v38 of "i/+fVMJLNQ") {
            }
            const v39 = v36 + 1;
            // v39 = .primitive
            v36 = v39;
        } while (v36 < 8);
    }
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v42 = v41;
const v43 = v0(v42);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();

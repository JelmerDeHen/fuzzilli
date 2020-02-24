function main() {
const v5 = {b:2147483647};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v6 = {__proto__:Uint8Array,a:v5,constructor:1337,d:"undefined",valueOf:1337,b:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["d", "b", "valueOf", "constructor", "a", "__proto__"])
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v15 = v14 + 1;
            // v15 = .primitive
            v14 = v15;
        } while (v14 < 8);
    }
    const v18 = new Int16Array(19873);
    // v18 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    let v20 = 0;
    function v21(v22,v23) {
        const v26 = [1337];
        // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        function v27(v28,v29) {
            let v32 = 0;
            do {
                if (v23) {
                } else {
                    const v33 = v21(v20,v26);
                    // v33 = .unknown
                }
                const v34 = v32 + 1;
                // v34 = .primitive
                v32 = v34;
            } while (v32 < 9);
        }
        const v35 = v27();
        // v35 = .unknown
        for (const v36 in "boolean") {
            let v39 = 372868337;
        }
    }
    const v41 = [1337];
    // v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v42 = v41;
    const v43 = v21(v42);
    // v43 = .unknown
    for (const v44 of v18) {
    }
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v47 = v46;
const v48 = v7(v47);
// v48 = .unknown
const v49 = v7(v5,v6);
// v49 = .unknown
}
%NeverOptimizeFunction(main);
main();

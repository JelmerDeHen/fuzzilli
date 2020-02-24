function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v5 = v4;
const v7 = Symbol.unscopables;
// v7 = .unknown
const v8 = v5[v7];
// v8 = .unknown
let v11 = 0;
while (v11 < 3) {
    function v13(v14,v15) {
        let v22 = 0;
        for (const v23 in "boolean") {
            let v26 = 0;
            do {
                let v29 = 0;
                do {
                    const v30 = v29 + 1;
                    // v30 = .primitive
                    v29 = v30;
                } while (v29 < 7);
                let v33 = 0;
                const v37 = v26 + 1;
                // v37 = .primitive
                let v44 = 0;
                let v47 = 0;
                let v50 = 0;
                v26 = v37;
            } while (v26 < 8);
        }
        const v54 = DataView + 1;
        // v54 = .primitive
        v22 = v54;
        function v55(v56,v57) {
            const v61 = new Int16Array(19873);
            // v61 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
            const v65 = [1337,1337];
            // v65 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v66 = {b:13.37,d:1607264097,e:1607264097,constructor:v65,valueOf:WeakSet};
            // v66 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__", "e", "valueOf", "d"])
            for (const v67 of v61) {
            }
        }
        const v69 = [1337];
        // v69 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v70 = v69;
        const v71 = v55(v70);
        // v71 = .unknown
    }
    const v74 = [1337];
    // v74 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v75 = v74;
    const v76 = v13(v75);
    // v76 = .unknown
    const v77 = v11 + 1;
    // v77 = .primitive
    v11 = v77;
}
}
%NeverOptimizeFunction(main);
main();

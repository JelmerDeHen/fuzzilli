function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            const v11 = eval(1337);
            // v11 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
            v7 = v8;
            const v13 = {valueOf:"string"};
            // v13 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
            function v15(v16,v17) {
            }
            const v22 = RegExp > "a";
            // v22 = .boolean
            const v25 = [1337];
            // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            function v26(v27,v28,v29,v30,v31) {
            }
            let v35 = 0;
            do {
                function v36(v37,v38,v39) {
                }
                const v40 = v35 + 1;
                // v40 = .primitive
                v35 = v40;
            } while (v35 < 10);
            const v43 = 1337 == 13.37;
            // v43 = .boolean
            if (v43) {
                function v44(v45,v46) {
                }
                function v47(v48,v49,v50,v51,v52) {
                }
            } else {
            }
            let v55 = 0;
            do {
                function v56(v57,v58,v59,v60,v61) {
                }
                const v62 = v55 + 1;
                // v62 = .primitive
                v55 = v62;
            } while (v55 < 7);
            let v65 = 0;
            do {
                function v66(v67,v68,v69,v70,v71) {
                }
                const v72 = v65 + 1;
                // v72 = .primitive
                v65 = v72;
            } while (v65 < 7);
            const v73 = v13 + 1;
            // v73 = .primitive
            const v74 = {toString:1};
            // v74 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
            for (const v75 of "iterator") {
                "a".length = v75;
            }
            let v78 = 0;
            function v81(v82,v83,v84,v85,v86) {
            }
            const v90 = Number[10000];
            // v90 = .unknown
            delete gc[1337];
            let v91 = gc;
        } while (v7 < 8);
        let v93 = -3888010622;
        const v94 = v93 + 1;
        // v94 = .primitive
        const v96 = Math.log(v94);
        // v96 = .number
    }
}
const v98 = [1337];
// v98 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v99 = v98;
const v100 = v0(v99);
// v100 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {toString:v2,b:"PI",valueOf:v4};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "toString"])
function v6(v7,v8) {
    for (let v12 = 0; v12 < 9; v12++) {
    }
    for (let v19 = 0; v19 < 10; v19++) {
    }
    let v22 = 0;
    for (const v23 in "boolean") {
        let v26 = 0;
        do {
            try {
                let v29 = 0;
                const v30 = v29 + 1;
                // v30 = .primitive
                const v31 = 1337 / 8;
                // v31 = .number
                const v32 = v30 - 1;
                // v32 = .primitive
                for (let v36 = 0; v36 < 4; v36++) {
                    const v37 = v36 - DataView;
                    // v37 = .number
                }
                const v38 = {};
                // v38 = .object(ofGroup: Object, withProperties: ["__proto__"])
                const v39 = [v38,v38,v38,v38];
                // v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
                const v40 = v5.valueOf;
                // v40 = .unknown
                let v43 = 0;
                const v44 = 1 || 8;
                // v44 = .boolean
                const v45 = v43 + 1;
                // v45 = .primitive
                v43 = v45;
                const v46 = {c:v31,toString:v26,valueOf:v43};
                // v46 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "__proto__", "toString"])
                const v47 = v39.__proto__;
                // v47 = .object()
                v29 = v30;
            } catch(v48) {
                let v51 = 0;
                for (let v55 = 0; v55 < 0; v55++) {
                }
                try {
                    let v59 = 0;
                    do {
                        function v60(v61,v62) {
                            const v71 = eval(1337);
                            // v71 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
                        }
                    } while (v59 < 7);
                } catch(v72) {
                }
            }
            const v73 = v26 + 1;
            // v73 = .primitive
            v26 = v73;
        } while (v26 < 8);
    }
    do {
        const v74 = v22 + 1;
        // v74 = .primitive
        v22 = v74;
    } while (v22 < 3);
    for (const v76 in "idshAQrujI") {
    }
}
const v78 = [1337];
// v78 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v79 = v78;
const v80 = v6(v79);
// v80 = .unknown
}
%NeverOptimizeFunction(main);
main();

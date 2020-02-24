function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v12 = {constructor:"symbol",length:"symbol"};
            // v12 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"])
            const v14 = Reflect.preventExtensions(v12);
            // v14 = .boolean
            function v15(v16,v17) {
                for (let v23 = 0; v23 < 10; v23++) {
                }
                let v26 = 9007199254740992;
                for (const v27 in "boolean") {
                    let v30 = 0;
                    let v33 = 0;
                }
                let v35 = 0;
            }
            let v37 = v2;
            do {
            } while (v37 < 7);
            for (let v43 = 0; v43 < 0; v43++) {
                const v44 = arguments(v43,1337,v43);
                // v44 = .unknown
            }
            const v45 = v10 + 1;
            // v45 = .primitive
            v10 = v45;
        } while (v10 < 8);
    }
    return DataView;
}
const v47 = [1337];
// v47 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v48 = v47;
const v49 = v3(v48);
// v49 = .unknown
const v50 = v3();
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
let v1 = 3;
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
function v6(v7,v8) {
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            const v21 = {valueOf:1337};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
            let v23 = 0;
            let v25 = 0;
            function v26(v27,v28) {
                for (const v30 in "boolean") {
                    let v33 = 0;
                    const v34 = typeof v30;
                    // v34 = .string
                    const v36 = v34 === "undefined";
                    // v36 = .boolean
                    v21[v36] = "undefined";
                    let v38 = 0;
                    const v39 = v38[3];
                    // v39 = .unknown
                    const v40 = v33 + 1;
                    // v40 = .primitive
                    v33 = v40;
                }
            }
            const v42 = [1337];
            // v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v43 = v42;
            const v44 = v26(v43);
            // v44 = .unknown
            const v46 = [];
            // v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v47 = {valueOf:v46,length:13.37,d:127,e:127};
            // v47 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__", "d", "valueOf"])
            const v48 = {c:v46,valueOf:v47,d:Array,a:1337};
            // v48 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c", "a"], withMethods: ["d"])
            length = v48;
            let v50 = 0;
            do {
                const v51 = v50 + 1;
                // v51 = .primitive
                v50 = v51;
            } while (v50 < 7);
            let v53 = 0;
            const v54 = v15 + 1;
            // v54 = .primitive
            v15 = v54;
        } while (v15 < 8);
    }
    const v55 = v11 + 1;
    // v55 = .primitive
}
const v57 = [1337];
// v57 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v58 = v57;
const v59 = v6(v58);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();

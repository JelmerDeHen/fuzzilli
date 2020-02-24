function main() {
const v4 = ["NaN",1337,3488870410];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {constructor:Uint32Array,c:v4};
// v5 = .object(ofGroup: Object, withProperties: ["c", "constructor", "__proto__"])
let v10 = 0;
let v11 = 0;
let v14 = 0;
function v18(v19,v20) {
    for (const v22 in "boolean") {
        function v24(v25,v26) {
            const v29 = ~v25;
            // v29 = .boolean
            const v30 = new Int16Array(19873);
            // v30 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
            let v34 = 0;
            for (const v38 of v30) {
            }
        }
        const v40 = [1337];
        // v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        let v41 = v40;
        const v42 = v24(v41);
        // v42 = .unknown
        const v43 = v24(1337,v42);
        // v43 = .unknown
        let v45 = 0;
        do {
            let v48 = 0;
            do {
                const v49 = v48 + 1;
                // v49 = .primitive
                v48 = v49;
            } while (v48 < 7);
            const v50 = v45 + 1;
            // v50 = .primitive
            v45 = v50;
        } while (v45 < 8);
    }
}
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v53 = v52;
const v54 = v18(v53);
// v54 = .unknown
let v57 = 0;
}
%NeverOptimizeFunction(main);
main();

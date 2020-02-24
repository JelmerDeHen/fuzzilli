function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v6,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {valueOf:v6,__proto__:v6};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v9 = {c:13.37,__proto__:v7,toString:v4,a:Int32Array,valueOf:Int32Array};
// v9 = .object(ofGroup: Object, withProperties: ["a", "c", "toString", "__proto__", "valueOf"])
let v10 = 3111507107;
let v12 = isNaN;
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v15 = v14;
function v16(v17,v18) {
    let v23 = 0;
    for (const v30 in "boolean") {
        let v33 = 0;
        do {
            let v36 = 0;
            do {
                const v37 = v36 + 1;
                // v37 = .primitive
                const v38 = v12(v36);
                // v38 = .boolean
                try {
                    const v41 = Map(-65537);
                    // v41 = .unknown
                } catch(v42) {
                }
                v36 = v37;
            } while (v36 < 7);
            const v46 = v33 + 1;
            // v46 = .primitive
            v33 = v46;
        } while (v33 < 8);
    }
    let v49 = 0;
    let v52 = 0;
    const v53 = v52 + 1;
    // v53 = .primitive
    v52 = v53;
    const v54 = v49 + 1;
    // v54 = .primitive
    v49 = v54;
    return v18;
}
const v57 = [1337];
// v57 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v58 = v57;
const v59 = v16(v58);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();

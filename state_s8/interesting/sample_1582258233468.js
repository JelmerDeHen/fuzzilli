function main() {
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = {__proto__:JSON,c:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v6 = v5;
let v8 = undefined;
const v10 = "boolean".includes();
// v10 = .boolean
function v16(v17,v18) {
    let v25 = 0;
    for (const v26 in "boolean") {
        const v28 = 0 / v10;
        // v28 = .number
        let v30 = 0;
        do {
            let v33 = 0;
            const v34 = v33 + 1;
            // v34 = .primitive
            v33 = v34;
            let v37 = 0;
            do {
                const v38 = v37 + 1;
                // v38 = .primitive
                v37 = v38;
            } while (v37 < 6);
            let v41 = 0;
            const v45 = v30 + 1;
            // v45 = .primitive
            v30 = v45;
        } while (v30 < 8);
    }
    const v46 = v25 + 1;
    // v46 = .primitive
    v25 = v46;
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v50 = v49;
const v51 = v16(v50);
// v51 = .unknown
let v52 = 0;
let v55 = 0;
let v58 = 0;
const v59 = v58 + 1;
// v59 = .primitive
v58 = v59;
let v62 = 0;
const v66 = v55 + 1;
// v66 = .primitive
v55 = v66;
const v67 = v3 + 1;
// v67 = .primitive
v52 = v67;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v1 = v0;
const v3 = Symbol.unscopables;
// v3 = .unknown
const v4 = v1[v3];
// v4 = .unknown
let v7 = 0;
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v11 = v10;
let v13 = undefined;
let v20 = 0;
for (const v21 in "boolean") {
    let v24 = 0;
    do {
        let v27 = 0;
        const v28 = v27 + 1;
        // v28 = .primitive
        v27 = v28;
        let v31 = 0;
        const v35 = v24 + 1;
        // v35 = .primitive
        function v36(v37,v38) {
            let v45 = 0;
            let v48 = 0;
            const v50 = [13.37,13.37,13.37,13.37];
            // v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v51 = v50.includes();
            // v51 = .boolean
            let v54 = 0;
            const v55 = v54 + 1;
            // v55 = .primitive
            v54 = v55;
            const v59 = v48 + 1;
            // v59 = .primitive
            v48 = v59;
            const v60 = v45 + 1;
            // v60 = .primitive
            v45 = v60;
        }
        const v62 = [1337];
        // v62 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v63 = v62;
        const v64 = v36(v63);
        // v64 = .unknown
        v24 = v35;
    } while (v24 < 8);
}
const v65 = DataView + 1;
// v65 = .primitive
v20 = v65;
const v67 = v7 + 1;
// v67 = .primitive
v7 = v67;
}
%NeverOptimizeFunction(main);
main();

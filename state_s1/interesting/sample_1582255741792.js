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
let v12 = 0;
while (v12 < 3) {
    function v14(v15,v16) {
        let v24 = 0;
        for (const v25 in "boolean") {
            let v28 = 0;
            do {
                let v31 = 0;
                const v32 = v31 + 1;
                // v32 = .primitive
                v31 = v32;
                let v35 = 0;
                const v39 = v28 + 1;
                // v39 = .primitive
                let v46 = 0;
                let v49 = 0;
                let v52 = 0;
                const v56 = 13.37 / "boolean";
                // v56 = .number
                v28 = v39;
            } while (v28 < 8);
        }
        const v57 = DataView + 1;
        // v57 = .primitive
        v24 = v57;
    }
    const v60 = [1337];
    // v60 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v61 = v60;
    const v62 = v14(v61);
    // v62 = .unknown
    const v63 = v12 + 1;
    // v63 = .primitive
    v12 = v63;
}
let v66 = 0;
const v67 = v66 + 1;
// v67 = .primitive
v66 = v67;
}
%NeverOptimizeFunction(main);
main();

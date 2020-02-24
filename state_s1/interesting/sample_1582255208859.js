function main() {
function v0(v1,v2) {
    for (let v7 = 0; v7 < 10; v7++) {
    }
    let v10 = 9007199254740992;
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v17 = 0;
            do {
                const v18 = v17 + 1;
                // v18 = .primitive
                v17 = v18;
            } while (v17 < 7);
            let v21 = 0;
            const v25 = v14 + 1;
            // v25 = .primitive
            v14 = v25;
        } while (v14 < 8);
    }
    do {
        const v26 = v10 + 1;
        // v26 = .primitive
        v10 = v26;
    } while (v10 < 3);
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v30 = v29;
const v31 = v0(v30);
// v31 = .unknown
const v33 = v0(1);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();

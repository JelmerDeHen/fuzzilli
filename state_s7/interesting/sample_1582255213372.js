function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {toString:"species",valueOf:v3,__proto__:"species"};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "valueOf"])
let v5 = v4;
function v6(v7,v8) {
    for (const v10 in "undefined") {
        let v13 = 0;
        do {
            const v17 = Boolean();
            // v17 = .boolean
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                const v22 = "undefined" - 1;
                // v22 = .primitive
                v5.valueOf = v8;
                v20 = v21;
            } while (v20 < 7);
            const v23 = v13 + 1;
            // v23 = .primitive
            v13 = v23;
        } while (v13 < 8);
        let v26 = 0;
        const v27 = v26 + 1;
        // v27 = .primitive
        v26 = v27;
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v30 = v29;
v5 = 1337;
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
const v35 = v6(v30);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
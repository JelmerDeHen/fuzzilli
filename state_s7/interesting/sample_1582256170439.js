function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,v4];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {b:v6,a:v6,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__"])
function v8(v9,v10) {
    let v17 = 9007199254740992;
    for (const v18 in "boolean") {
        v9.constructor = v9;
        let v20 = v7;
        v20.c = v8;
        let v22 = 0;
        do {
            let v25 = 0;
            do {
                const v26 = v25 + 1;
                // v26 = .primitive
                v25 = v26;
            } while (v25 < 7);
            const v29 = 0 | v25;
            // v29 = .integer
            const v32 = v22 + 1;
            // v32 = .primitive
            v22 = v32;
        } while (v22 < 8);
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v36 = v35;
const v37 = v8(v36);
// v37 = .unknown
const v39 = v8(1);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();

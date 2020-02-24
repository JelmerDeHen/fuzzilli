function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5) {
    for (const v7 in "undefined") {
        let v10 = 0;
        do {
            const v12 = [1337,1337];
            // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v13 = v12.shift();
            // v13 = .unknown
            v2.toString = v13;
            let v19 = 0;
            const v20 = v19 + 1;
            // v20 = .primitive
            v19 = v20;
            const v21 = v10 + 1;
            // v21 = .primitive
            v10 = v21;
        } while (v10 < 8);
        let v24 = 0;
        let v28 = 0;
        let v31 = 0;
        const v32 = v24 + 1;
        // v32 = .primitive
        v24 = v32;
    }
}
let v35 = 0;
const v36 = v35 + 1;
// v36 = .primitive
v35 = v36;
const v37 = v3();
// v37 = .unknown
v2.c = v37;
const v38 = v3(1337,"undefined");
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();

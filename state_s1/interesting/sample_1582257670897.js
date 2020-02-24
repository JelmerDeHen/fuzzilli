function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
const v8 = [];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = {valueOf:v8,length:13.37,d:127,e:127};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "length", "d", "e"])
function v10(v11,v12) {
    let v19 = 0;
    for (const v20 in "boolean") {
        let v23 = 0;
        do {
            const v24 = v8.findIndex(Array,v9);
            // v24 = .integer
            let v27 = 0;
            do {
                const v28 = v27 + 1;
                // v28 = .primitive
                v27 = v28;
            } while (v27 < 7);
            let v31 = 0;
            const v32 = v23 + 1;
            // v32 = .primitive
            v23 = v32;
        } while (v23 < 8);
    }
    const v33 = v19 + 1;
    // v33 = .primitive
    v19 = v33;
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v37 = v36;
const v38 = v10(v37);
// v38 = .unknown
let v42 = 0;
}
%NeverOptimizeFunction(main);
main();

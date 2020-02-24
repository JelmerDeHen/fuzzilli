function main() {
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v4 = v3;
let v6 = undefined;
function v7(v8,v9) {
    let v16 = 0;
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            const v22 = RegExp.bind(RegExp);
            // v22 = .unknown
            const v23 = v22();
            // v23 = .unknown
            let v26 = 0;
            do {
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
            } while (v26 < 7);
            let v30 = 0;
            const v34 = v20 + 1;
            // v34 = .primitive
            v20 = v34;
        } while (v20 < 8);
    }
    const v35 = v16 + 1;
    // v35 = .primitive
    v16 = v35;
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v39 = v38;
const v40 = v7(v39);
// v40 = .unknown
const v41 = [13.37,13.37,13.37,13.37];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v42 = {__proto__:"hasInstance",d:v41};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v44 = {call:v42};
// v44 = .object(ofGroup: Object, withProperties: ["__proto__", "call"])
const v46 = new Proxy(Array,v44);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();

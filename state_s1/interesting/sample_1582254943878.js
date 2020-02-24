function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [1337,v2,"e",v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v4 = "e";
function v6(v7,v8) {
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            const v17 = {constructor:"symbol",length:"symbol"};
            // v17 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
            const v19 = Reflect.preventExtensions(v17);
            // v19 = .boolean
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
            } while (v22 < 7);
            for (let v29 = 0; v29 < 0; v29++) {
                const v30 = arguments(v29,1337,v29);
                // v30 = .unknown
            }
            const v31 = v15 + 1;
            // v31 = .primitive
            v15 = v31;
        } while (v15 < 8);
    }
    const v32 = v11 + 1;
    // v32 = .primitive
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v35 = v34;
const v36 = v6(v35);
// v36 = .unknown
const v37 = v6();
// v37 = .unknown
const v38 = gc();
// v38 = .undefined
const v40 = [];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v46 = v40 && Reflect;
// v46 = .boolean
a = v4;
v4 = gc;
}
%NeverOptimizeFunction(main);
main();

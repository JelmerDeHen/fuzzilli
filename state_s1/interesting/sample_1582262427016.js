function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v2 = [1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            const v12 = {constructor:"symbol",length:"symbol"};
            // v12 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
            const v14 = Reflect.preventExtensions(v12);
            // v14 = .boolean
            function v15(v16,v17) {
            }
            let v19 = v2;
            do {
            } while (v19 < 7);
            for (let v25 = 0; v25 < 0; v25++) {
                const v26 = arguments(v25,1337,v25);
                // v26 = .unknown
            }
            const v27 = v10 + 1;
            // v27 = .primitive
            v10 = v27;
        } while (v10 < 8);
    }
    return v0;
}
let v29 = v3;
const v30 = v3(v29);
// v30 = .unknown
const v31 = v3();
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();

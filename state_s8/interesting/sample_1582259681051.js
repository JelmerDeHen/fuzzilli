function main() {
let v3 = 0;
const v5 = v3 + 1;
// v5 = .primitive
v3 = v5;
function v7(v8,v9) {
    let v16 = 0;
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            let v23 = 0;
            do {
                const v24 = v23 + 1;
                // v24 = .primitive
                v23 = v24;
            } while (v23 < 7);
            let v27 = 0;
            const v34 = v20 + 1;
            // v34 = .primitive
            v20 = v34;
        } while (v20 < 8);
    }
    const v35 = v16 + 1;
    // v35 = .primitive
    v16 = v35;
    const v39 = RegExp("eeeRbEqfAO");
    // v39 = .object()
    const v42 = {constructor:"number",length:9007199254740993};
    // v42 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
    v42.toString = v39;
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v47 = v46;
const v48 = v7(v47);
// v48 = .unknown
const v49 = v7(1024,4.0);
// v49 = .unknown
}
%NeverOptimizeFunction(main);
main();

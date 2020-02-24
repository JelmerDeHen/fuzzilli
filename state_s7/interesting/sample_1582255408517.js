function main() {
function v1(v2,v3) {
    for (let v8 = 0; v8 < v3; v8++) {
    }
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            let v22 = 0;
            const v24 = v15 + 1;
            // v24 = .primitive
            v15 = v24;
        } while (v15 < 8);
    }
    const v25 = v1 + 1;
    // v25 = .primitive
    v11 = v25;
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v30 = v29;
const v31 = v1(v30);
// v31 = .unknown
const v32 = v1();
// v32 = .unknown
const v33 = v1("undefined",4.0);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();

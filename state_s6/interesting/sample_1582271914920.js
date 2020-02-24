function main() {
function v1(v2,v3) {
    for (let v8 = 0; v8 < 10; v8++) {
    }
    let v10 = 0;
    for (const v11 in "boolean") {
        let v14 = 0;
        for (const v16 of "pvU0UUjoya") {
        }
        const v17 = v14 + 1;
        // v17 = .primitive
        v14 = v17;
    }
    const v18 = v10 + 1;
    // v18 = .primitive
    function v19(v20,v21) {
        for (const v26 in "boolean") {
            let v29 = 0;
            do {
                let v32 = 0;
                const v33 = v32 + 1;
                // v33 = .primitive
                v32 = v33;
                const v34 = v29 + 1;
                // v34 = .primitive
                v29 = v34;
            } while (v29 < 8);
        }
        return v18;
    }
    const v36 = [1337];
    // v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v37 = v36;
    const v38 = v19(v37);
    // v38 = .unknown
    const v41 = 1337 == 13.37;
    // v41 = .boolean
    const v43 = Object();
    // v43 = .object()
    const v44 = v38.__proto__;
    // v44 = .unknown
}
const v47 = [1337];
// v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v48 = v47;
const v49 = v1(v48);
// v49 = .unknown
const v50 = v1(1024,4.0);
// v50 = .unknown
const v51 = v1();
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();

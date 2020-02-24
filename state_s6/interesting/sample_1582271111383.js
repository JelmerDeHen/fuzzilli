function main() {
function v0(v1,v2) {
    const v7 = [13.37,13.37,13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v9 = [1337,1337];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v10 = [v7,v7];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v11 = {b:"MAX_VALUE",length:v9,c:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["c", "length", "__proto__", "b"])
    const v12 = {constructor:-268435456,c:13.37,d:13.37};
    // v12 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "c", "constructor"])
    let v13 = v11;
    for (let v17 = 0; v17 < 8; v17++) {
        let v20 = 0;
        do {
            const v23 = [1337,1337,1337,1337];
            // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            for (const v24 in "object") {
                const v25 = [1337,...v23,...v24];
                // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            }
            const v27 = (1337).__proto__;
            // v27 = .unknown
            let v29 = 0;
            const v30 = v29 + 1;
            // v30 = .primitive
            v29 = v30;
            const v32 = v27.toLocaleString(1298632903);
            // v32 = .unknown
            const v33 = v20 + 1;
            // v33 = .primitive
            v20 = v33;
        } while (v20 < 8);
    }
    for (const v34 in "boolean") {
        let v37 = 0;
        do {
            function v38(v39,v40,v41,v42,v43) {
            }
            const v44 = v37 + 1;
            // v44 = .primitive
            v37 = v44;
        } while (v37 < 8);
    }
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v47 = v46;
const v48 = v0(v47);
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();

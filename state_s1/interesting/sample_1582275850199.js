function main() {
function v0(v1,v2) {
    for (const v4 in "object") {
        const v7 = {c:1337};
        // v7 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
        function v8(v9,v10) {
            for (const v13 in "boolean") {
                let v16 = 0;
                do {
                    const v17 = 1337 in v7;
                    // v17 = .boolean
                    const v18 = v16 + 1;
                    // v18 = .primitive
                    v16 = v18;
                } while (v16 < 8);
            }
        }
        const v20 = [1337];
        // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v21 = v20;
        const v22 = v8(v21);
        // v22 = .unknown
        const v24 = {get:v8};
        // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
        const v26 = Object.defineProperty(v7,-1687751422,v24);
        // v26 = .undefined
        const v27 = v8();
        // v27 = .unknown
        const v29 = [1337];
        // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v30 = v29;
        let v32 = undefined;
        let v36 = 0;
        const v37 = v36 + 1;
        // v37 = .primitive
        v36 = v37;
        const v39 = {c:13.37};
        // v39 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
        let v43 = 0;
        const v44 = v43 + 1;
        // v44 = .primitive
        v43 = v44;
    }
    let v49 = 0;
    const v50 = v0 + 1;
    // v50 = .primitive
    v49 = v50;
}
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v53 = v52;
const v54 = v0(v53);
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();

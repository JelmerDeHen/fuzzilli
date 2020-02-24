function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v11 = 0;
            const v12 = {};
            // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
            v12.a = "boolean";
            const v13 = v11 + 1;
            // v13 = .primitive
            v11 = v13;
            const v15 = {get:v1};
            // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
            const v17 = Object.defineProperty(v12,-4294967296,v15);
            // v17 = .undefined
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
            const v22 = v8 + 1;
            // v22 = .primitive
            v8 = v22;
        } while (v8 < 8);
    }
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v25 = v24;
const v26 = v1(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();

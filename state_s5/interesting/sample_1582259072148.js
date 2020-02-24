function main() {
const v2 = {e:1337,toString:Promise};
// v2 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e"])
function v3(v4,v5) {
    for (const v10 in "boolean") {
        let v13 = 0;
        let v16 = 0;
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
        const v18 = v2.toString;
        // v18 = .unknown
        let v28 = 0;
        const v29 = v28 + 1;
        // v29 = .primitive
        v28 = v29;
        for (let v33 = 0; v33 < 100; v33++) {
        }
        for (const v34 of "pvU0UUjoya") {
            Promise.valueOf = Promise;
            v13 = v34;
        }
    }
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v37 = v36;
const v38 = v3(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        const v8 = v7 + 1;
        // v8 = .primitive
        v7 = v8;
        let v11 = 0;
        do {
            const v12 = v11 + 1;
            // v12 = .primitive
            v11 = v12;
        } while (v11 < 512);
        const v15 = {has:Boolean,deleteProperty:Boolean,apply:Boolean};
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "has", "apply"])
        const v17 = new Proxy(Boolean,v15);
        // v17 = .unknown
        const v19 = [13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        with ("e") {
            const v20 = v17(v19);
            // v20 = .unknown
        }
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();

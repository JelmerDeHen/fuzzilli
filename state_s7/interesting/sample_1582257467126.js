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
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "deleteProperty", "has"])
        const v17 = new Proxy(Boolean,v15);
        // v17 = .unknown
        const v19 = [13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        with ("e") {
            const v20 = v17(v19);
            // v20 = .unknown
        }
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();

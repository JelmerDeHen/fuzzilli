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
        // v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "apply", "deleteProperty"])
        const v17 = new Proxy(Boolean,v15);
        // v17 = .unknown
        const v19 = [13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        with ("e") {
            const v20 = v17(v19);
            // v20 = .unknown
        }
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();

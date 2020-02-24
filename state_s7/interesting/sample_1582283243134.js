function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v11 = 0;
        function v14(v15,v16) {
            const v18 = {a:v16,preventExtensions:v16,defineProperty:v14,getPrototypeOf:v16,deleteProperty:v16,has:v14,set:v15,apply:v16};
            // v18 = .object(ofGroup: Object, withProperties: ["apply", "preventExtensions", "deleteProperty", "getPrototypeOf", "set", "__proto__", "a"], withMethods: ["defineProperty", "has"])
            const v20 = new Proxy(v14,v18);
            // v20 = .unknown
            const v21 = {__proto__:0,...Proxy,...v14,...v20};
            // v21 = .object(ofGroup: Object, withProperties: ["__proto__"])
        }
        const v23 = [1337,1337,1337,1337];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v24 = v23.reduceRight(v14);
        // v24 = .unknown
        let v25 = 0;
        do {
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
        } while (v25 < 6);
    }
}
const v27 = v4.forEach(v5,"eeeRbEqfAO");
// v27 = .undefined
const v28 = typeof "DwTSpuldnd";
// v28 = .string
const v30 = v28 === "undefined";
// v30 = .boolean
}
%NeverOptimizeFunction(main);
main();

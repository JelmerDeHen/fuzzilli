function main() {
function v0(v1,v2) {
    let v5 = 0;
    do {
        try {
            function v6(v7,v8) {
                const v10 = {a:v8,preventExtensions:v8,defineProperty:v6,getPrototypeOf:v8,deleteProperty:v8,has:v6,set:v7,apply:v8};
                // v10 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "getPrototypeOf", "deleteProperty", "apply", "preventExtensions", "a"], withMethods: ["defineProperty", "has"])
                const v12 = new Proxy(v6,v10);
                // v12 = .unknown
                const v13 = {__proto__:0,...Proxy,...v6,...v12};
                // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
            }
            const v15 = [1337,1337,1337,1337];
            // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v16 = v15.reduceRight(v6);
            // v16 = .unknown
        } catch(v17) {
            function v18(v19,v20) {
                let v23 = v20;
            }
        }
        for (let v28 = 0; v28 < 100; v28++) {
        }
        const v29 = v5 + 1;
        // v29 = .primitive
        v5 = v29;
    } while (v5 < 8);
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v32 = v31;
const v33 = v0(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();

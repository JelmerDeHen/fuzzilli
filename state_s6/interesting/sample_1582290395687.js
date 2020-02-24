function main() {
const v2 = {a:13.37,length:Map};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "a"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v12 = 0;
            const v13 = v2.__proto__;
            // v13 = .object()
            const v14 = v12 + 1;
            // v14 = .primitive
            const v16 = v4[0];
            // v16 = .unknown
            try {
            } catch(v17) {
            }
            const v18 = 13.37 << v7;
            // v18 = .integer
            v16.a = 0;
            let v19 = 0;
            const v20 = v19 != v18;
            // v20 = .boolean
            if (v20) {
            } else {
                while (0 < 9) {
                }
            }
            function v23(v24,v25) {
            }
            const v26 = v10 + 1;
            // v26 = .primitive
            v10 = v26;
        } while (v10 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v29 = v28;
const v30 = v3(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [563841718];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {a:13.37,b:563841718,valueOf:13.37,constructor:v3,d:563841718,c:1337};
// v4 = .object(ofGroup: Object, withProperties: ["d", "b", "valueOf", "constructor", "c", "a", "__proto__"])
const v7 = {a:13.37,length:Map};
// v7 = .object(ofGroup: Object, withProperties: ["length", "a", "__proto__"])
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v17 = 0;
            const v18 = v7.__proto__;
            // v18 = .object()
            const v19 = v17 + 1;
            // v19 = .primitive
            try {
            } catch(v21) {
            }
            const v22 = 13.37 << v12;
            // v22 = .integer
            function v23(v24,v25) {
            }
            let v26 = 0;
            const v27 = v26 != v22;
            // v27 = .boolean
            if (v27) {
            } else {
                while (0 < 9) {
                }
            }
            function v30(v31,v32) {
            }
            const v33 = v15 + 1;
            // v33 = .primitive
            v15 = v33;
        } while (v15 < 8);
    }
}
const v34 = [v4];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v35 = v34;
const v36 = v8(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();

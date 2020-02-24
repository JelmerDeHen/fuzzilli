function main() {
function v1(v2,v3) {
    let v5 = 0;
    let v8 = 0;
    do {
        try {
            let v10 = 0;
            const v13 = DataView(28997);
            // v13 = .unknown
        } catch(v14) {
            const v17 = [];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v18 = {valueOf:v17,length:13.37,d:127,e:127};
            // v18 = .object(ofGroup: Object, withProperties: ["d", "e", "__proto__", "valueOf", "length"])
            let v19 = v18;
            const v20 = v19[3];
            // v20 = .unknown
            function v21(v22,v23) {
                let v26 = 0;
                let v28 = v23;
                const v29 = v26 + 1;
                // v29 = .primitive
                v19 = v29;
                return v18;
            }
        }
        for (let v34 = 0; v34 < 100; v34++) {
        }
        const v35 = v8 * 0;
        // v35 = .number
        const v36 = v8 + 1;
        // v36 = .primitive
        v8 = v36;
    } while (v8 < 8);
}
let v37 = 1337;
const v38 = v1(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();

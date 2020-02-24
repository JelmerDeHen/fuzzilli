function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v3(v4,v5) {
    let v10 = 0;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    const v13 = [3156875969,3156875969,1337,DataView];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v14 = {e:DataView,constructor:1337,valueOf:1337,d:v13};
    // v14 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "d", "e"])
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                v1.__proto__ = v2;
                try {
                    v5[5] = 0;
                } catch(v28) {
                }
                v2.__proto__ = v14;
                let v31 = 0;
                const v32 = v31 + 1;
                // v32 = .primitive
                v31 = v32;
                v22 = v23;
            } while (v22 < 7);
            const v33 = v19 + 1;
            // v33 = .primitive
            v19 = v33;
        } while (v19 < 8);
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v36 = v35;
const v37 = v3(v36);
// v37 = .unknown
const v38 = v3();
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();

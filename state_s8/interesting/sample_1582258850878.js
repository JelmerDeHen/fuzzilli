function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v1(v2,v3) {
    const v7 = [3156875969,3156875969,1337,DataView];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v8 = {e:DataView,constructor:1337,valueOf:1337,d:v7};
    // v8 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "e", "d", "valueOf"])
    let v15 = 0;
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                v8.e = v19;
                v0.__proto__ = v8;
                let v26 = 0;
                const v27 = v26 + 1;
                // v27 = .primitive
                v26 = v27;
                v22 = v23;
            } while (v22 < 7);
            let v30 = 0;
            const v34 = v19 + 1;
            // v34 = .primitive
            v19 = v34;
        } while (v19 < 8);
        let v37 = 0;
        const v38 = v37 + 1;
        // v38 = .primitive
        v37 = v38;
        let v41 = 0;
        const v42 = v41 + 1;
        // v42 = .primitive
        v41 = v42;
    }
    const v43 = v15 + 1;
    // v43 = .primitive
    v15 = v43;
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v47 = v46;
const v48 = v1(v47);
// v48 = .unknown
const v49 = v1();
// v49 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2) {
    let v9 = 0;
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
        } while (v13 < 7);
    }
    do {
        const v18 = v9 + 1;
        // v18 = .primitive
        let v20 = 1337;
        function v21(v22,v23) {
            v21.prototype = 1337;
            return v21;
        }
        const v25 = v21();
        // v25 = .unknown
        v25.toString = v20;
        const v33 = gc();
        // v33 = .undefined
        v9 = v18;
    } while (v9 < 3);
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v38 = v37;
const v39 = v0(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();

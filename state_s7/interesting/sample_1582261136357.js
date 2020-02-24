function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v8 = v6 + 1;
    // v8 = .primitive
    v6 = v8;
    RegExp.toString = -9007199254740992;
    const v12 = [1337,1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    v12.__proto__ = RegExp;
    let v15 = 0;
    do {
        const v16 = v15 + 1;
        // v16 = .primitive
        function v17(v18,v19) {
            for (let v22 = 0; v22 < 10; v22 = v22 + v16) {
                function v23(v24,v25) {
                }
            }
        }
        const v27 = [1337];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v28 = v27;
        const v29 = v17(v28);
        // v29 = .unknown
        v15 = v16;
    } while (v15 < 7);
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v32 = v31;
const v33 = v0(v32);
// v33 = .unknown
const v34 = v0();
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();

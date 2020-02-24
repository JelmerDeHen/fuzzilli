function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v8 = v6 + 1;
    // v8 = .primitive
    v6 = v8;
    RegExp.toString = -9007199254740992;
    const v12 = [1337,1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        let v28 = v27;
        const v29 = v17(v28);
        // v29 = .unknown
        v15 = v16;
    } while (v15 < 7);
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v32 = v31;
const v33 = v0(v32);
// v33 = .unknown
const v34 = v0();
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();

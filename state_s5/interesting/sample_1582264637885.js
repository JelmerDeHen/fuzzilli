function main() {
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = [13.37];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
for (const v10 in "boolean") {
    const v11 = "boolean" * v10;
    // v11 = .number
}
const v12 = {};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v13 = {b:v5,c:13.37,valueOf:-9007199254740993,d:v8,constructor:1337,__proto__:v7};
// v13 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "b", "d", "constructor", "__proto__"])
let v14 = v13;
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
function v28(v29,v30) {
    let v32 = undefined;
    const v33 = v32 - 1;
    // v33 = .primitive
    for (const v35 in "boolean") {
        let v38 = 0;
        do {
            let v41 = 0;
            do {
                const v42 = "constructor" + 1;
                // v42 = .primitive
                v41 = v42;
            } while (v41 < 7);
            let v45 = 0;
            const v46 = !v45;
            // v46 = .boolean
            v45 = v46;
            let v49 = 0;
            do {
                const v50 = v49 + 1;
                // v50 = .primitive
                v49 = v50;
            } while (v49 < 3);
            const v52 = v38 + 1;
            // v52 = .primitive
            v38 = v52;
        } while (v38 < 257);
    }
    return 13.37;
}
const v54 = [1337];
// v54 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v55 = gc();
// v55 = .undefined
const v56 = v28(1337,-828296917);
// v56 = .unknown
const v57 = v12.__proto__;
// v57 = .object()
v12.constructor = v19;
}
%NeverOptimizeFunction(main);
main();

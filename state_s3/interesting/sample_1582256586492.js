function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {a:1337,toString:13.37,c:v3,__proto__:v5,valueOf:"a",constructor:v3};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "valueOf", "constructor", "toString", "c"])
const v7 = {toString:v3,valueOf:v6,d:1337,constructor:-9007199254740992};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "d", "toString"])
function v8(v9,v10) {
    const v14 = [13.37,13.37,13.37,13.37];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v15 = [v14,-1970853828,DataView];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    for (const v17 in "boolean") {
        let v20 = 0;
        do {
            for (const v21 in v5) {
            }
            let v24 = 0;
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
            const v26 = v20 + 1;
            // v26 = .primitive
            v20 = v26;
        } while (v20 < 8);
    }
}
const v27 = [-9007199254740992];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v28 = v27;
const v29 = v8(v28);
// v29 = .unknown
const v30 = v8();
// v30 = .unknown
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
v5[2722785800] = v7;
const v35 = v8();
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();

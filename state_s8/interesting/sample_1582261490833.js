function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
function v7(v8,v9) {
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            const v17 = [13.37,13.37,13.37,13.37,13.37];
            // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v18 = v17;
            const v24 = [1337];
            // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v25 = {b:v24,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
            // v25 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "a", "e", "__proto__", "b"])
            v18[8] = v25;
            for (const v26 of v18) {
            }
            const v27 = v14 + 1;
            // v27 = .primitive
            v14 = v27;
        } while (v14 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v30 = v29;
const v31 = v7(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();

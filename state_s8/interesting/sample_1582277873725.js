function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [-4294967297,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {c:v6,toString:13.37,valueOf:v7,a:v7,d:v4,__proto__:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "a", "d", "__proto__", "c", "valueOf"])
const v9 = {toString:-4294967297};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
let v10 = "function";
function v11(v12,v13) {
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            let v21 = v19;
            const v22 = v21 % 9;
            // v22 = .number
            const v23 = v22 + 1;
            // v23 = .primitive
            v21 = v23;
            for (const v27 in "boolean") {
                let v30 = 0;
                do {
                    let v33 = 0;
                    const v34 = v30 + 1;
                    // v34 = .primitive
                    v30 = v34;
                } while (v30 < 8);
            }
            const v35 = [1337,1337,1337,1337,1337];
            // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            function v36(v37,v38) {
                return v4;
            }
            const v39 = v35.forEach(v36,"eeeRbEqfAO");
            // v39 = .undefined
            const v40 = v39 + 1;
            // v40 = .primitive
            v19 = v40;
        } while (v19 < 8);
    }
    return v12;
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v43 = v42;
let v46 = 0;
while (v46 < 8) {
    const v48 = [1337];
    // v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v49 = v48;
    let v51 = undefined;
    for (const v53 in "boolean") {
        const v56 = [1337];
        // v56 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v59 = Symbol.species;
        // v59 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        RegExp[v59] = v56;
    }
    const v60 = v46 + 1;
    // v60 = .primitive
    v46 = v60;
}
const v61 = v11(v43);
// v61 = .unknown
}
%NeverOptimizeFunction(main);
main();

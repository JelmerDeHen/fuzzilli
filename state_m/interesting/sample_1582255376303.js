function main() {
for (const v1 in "object") {
    const v4 = {length:"N0Xx92zvHQ"};
    // v4 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v7 = [13.37,13.37];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v8 = (13.37)[v4];
    // v8 = .unknown
    function v9(v10,v11) {
        const v13 = new Number();
        // v13 = .number
        const v14 = v7[2147483648];
        // v14 = .unknown
        let v18 = 0;
        for (const v19 in "boolean") {
            let v22 = 0;
            do {
                let v25 = 0;
                do {
                    const v26 = v25 + 1;
                    // v26 = .primitive
                    v25 = v26;
                } while (v25 < 7);
                let v29 = 0;
                const v30 = v22 + 1;
                // v30 = .primitive
                v22 = v30;
            } while (v22 < 8);
        }
        const v31 = v18 + 1;
        // v31 = .primitive
        v18 = v31;
    }
    const v33 = [1337];
    // v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v34 = v33;
    const v35 = v9(v34);
    // v35 = .unknown
}
let v41 = 0;
const v42 = v41 + 1;
// v42 = .primitive
v41 = v42;
}
%NeverOptimizeFunction(main);
main();

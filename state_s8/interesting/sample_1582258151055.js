function main() {
const v3 = {constructor:1337,length:13.37,e:4294967295,d:13.37,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "length", "__proto__", "d", "e"])
function v4(v5,v6) {
    let v10 = 0;
    for (const v11 in "boolean") {
        const v14 = Symbol.unscopables;
        // v14 = .unknown
        let v18 = 0;
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
        let v21 = 0;
        do {
            let v24 = 0;
            do {
                const v25 = v24 + 1;
                // v25 = .primitive
                const v27 = eval();
                // v27 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
                v24 = v25;
            } while (v24 < 7);
            let v33 = 0;
            const v34 = v21 + 1;
            // v34 = .primitive
            v21 = v34;
        } while (v21 < 8);
    }
    const v35 = v10 + 1;
    // v35 = .primitive
    v10 = v35;
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v38 = v37;
const v39 = v4(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = {constructor:1337,length:13.37,e:4294967295,d:13.37,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__", "e", "toString", "d"])
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
                // v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v38 = v37;
const v39 = v4(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();

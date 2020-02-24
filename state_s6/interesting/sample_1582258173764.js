function main() {
const v3 = {constructor:1337,length:13.37,e:4294967295,d:13.37,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["length", "toString", "__proto__", "constructor", "d", "e"])
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
                // v27 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
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
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v38 = v37;
const v39 = v4(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();

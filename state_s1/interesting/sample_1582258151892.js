function main() {
const v3 = {constructor:1337,length:13.37,e:4294967295,d:13.37,toString:1337};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "length", "e", "constructor", "d"])
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
                // v27 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
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
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v38 = v37;
const v39 = v4(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();

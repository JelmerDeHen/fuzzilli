function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {valueOf:v2,constructor:1337,a:-1073741824};
// v3 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "constructor", "__proto__"])
let v6 = 0;
while (v6 < 3) {
    function v8(v9,v10) {
        for (const v12 in "boolean") {
            let v15 = 0;
            do {
                const v16 = v15 + 1;
                // v16 = .primitive
                let v19 = 0;
                while (v19 < 4) {
                    const v20 = v19 + 1;
                    // v20 = .primitive
                    function v21(v22,v23) {
                        const v24 = v22 in v21;
                        // v24 = .boolean
                        let v26 = 0;
                        const v27 = v26 + 1;
                        // v27 = .primitive
                        v26 = v27;
                    }
                    const v29 = [1337];
                    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                    let v30 = v29;
                    const v31 = v21(v30);
                    // v31 = .unknown
                    v19 = v20;
                }
                v15 = v16;
            } while (v15 < 8);
        }
        const v35 = eval(1337);
        // v35 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        let v38 = 1903240934;
        const v40 = new Int8Array(v38);
        // v40 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
        let v42 = undefined;
        const v45 = new Int16Array(19873);
        // v45 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
        for (const v46 of v45) {
        }
        v42 = DataView;
    }
    const v48 = [1337];
    // v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v49 = v48;
    const v50 = v8(v49);
    // v50 = .unknown
    const v51 = v6 + 1;
    // v51 = .primitive
    v6 = v51;
}
}
%NeverOptimizeFunction(main);
main();

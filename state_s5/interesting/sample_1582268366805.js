function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v9 = {e:13.37,d:"d"};
        // v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
        const v10 = {e:v9,d:1337};
        // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
        let v11 = v10;
        let v13 = "boolean";
        const v14 = v13[3];
        // v14 = .unknown
        let v15 = 13.37;
        if (v14) {
            v15 = v11;
        } else {
        }
        let v16 = 0;
        const v19 = eval(1337);
        // v19 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        let v22 = 0;
        do {
            let v25 = 0;
            do {
                const v26 = v25 + 1;
                // v26 = .primitive
                v25 = v26;
            } while (v25 < 7);
            const v30 = v22 + 1;
            // v30 = .primitive
            v22 = v30;
        } while (v22 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v33 = v32;
const v34 = v0(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();

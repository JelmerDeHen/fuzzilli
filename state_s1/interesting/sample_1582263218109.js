function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v6 = v2 == v4;
        // v6 = .boolean
        let v8 = 0;
        const v9 = v8 + 1;
        // v9 = .primitive
        function v10(v11,v12) {
            let v16 = 0;
            const v19 = eval(1337);
            // v19 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        }
        let v21 = 0;
        do {
            for (let v25 = 0; v25 < 4; v25++) {
            }
            const v26 = v21 + 1;
            // v26 = .primitive
            v21 = v26;
        } while (v21 < 8);
    }
}
const v28 = [3156875969];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();

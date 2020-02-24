function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        for (let v9 = 0; v9 < 3; v9++) {
            let v11 = -3888010622;
            const v12 = v11 + 1;
            // v12 = .primitive
            const v14 = Math.log(v12);
            // v14 = .number
            const v17 = eval(1337);
            // v17 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        }
        let v18 = v4;
        const v19 = v18 + 1;
        // v19 = .primitive
        v18 = v19;
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v22 = v21;
const v23 = v0(v22);
// v23 = .unknown
const v24 = v0();
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();

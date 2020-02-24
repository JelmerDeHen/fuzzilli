function main() {
function v1(v2,v3) {
    for (let v8 = 0; v8 < 10; v8++) {
    }
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            let v15 = 0;
            const v16 = v15 + 1;
            // v16 = .primitive
            v15 = v16;
            let v26 = 0;
            function v27(v28,v29) {
                const v35 = eval(1337);
                // v35 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
            }
            const v41 = v12 + 1;
            // v41 = .primitive
            v12 = v41;
        } while (v12 < 8);
    }
    const v45 = [13.37,13.37,13.37,13.37];
    // v45 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v47 = {b:v45,constructor:1337,d:-1107350769};
    // v47 = .object(ofGroup: Object, withProperties: ["b", "constructor", "d", "__proto__"])
    const v49 = Math.floor(v47);
    // v49 = .number
}
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v53 = v52;
const v54 = v1(v53);
// v54 = .unknown
const v55 = v1(1024,4.0);
// v55 = .unknown
let v58 = 0;
const v59 = v58 + 1;
// v59 = .primitive
v58 = v59;
}
%NeverOptimizeFunction(main);
main();

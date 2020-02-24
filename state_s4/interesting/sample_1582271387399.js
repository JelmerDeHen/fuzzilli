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
                // v35 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
            }
            const v41 = v12 + 1;
            // v41 = .primitive
            v12 = v41;
        } while (v12 < 8);
    }
    const v45 = [13.37,13.37,13.37,13.37];
    // v45 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v47 = {b:v45,constructor:1337,d:-1107350769};
    // v47 = .object(ofGroup: Object, withProperties: ["d", "constructor", "__proto__", "b"])
    const v49 = Math.floor(v47);
    // v49 = .number
}
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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

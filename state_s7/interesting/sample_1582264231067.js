function main() {
const v5 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["c", "constructor", "__proto__", "b", "a"], withMethods: ["d"])
let v6 = v5;
for (const v8 in "boolean") {
    let v10 = 0;
    try {
        const v11 = v6.__proto__;
        // v11 = .object()
        v6 = v11;
        for (let v15 = 0; v15 < 3; v15++) {
            for (const v17 in "object") {
            }
            const v19 = [1337];
            // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            let v20 = v19;
            let v22 = undefined;
            let v26 = 0;
            let v29 = 0;
            const v30 = v29 + 1;
            // v30 = .primitive
            v29 = v30;
            const v31 = v26 + 1;
            // v31 = .primitive
            const v34 = eval(1337);
            // v34 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            v26 = v31;
        }
    } catch(v35) {
    }
}
}
%NeverOptimizeFunction(main);
main();

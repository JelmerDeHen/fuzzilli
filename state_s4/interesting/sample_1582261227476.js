function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v5(v6,v7) {
            const v8 = v4 * v4;
            // v8 = .number
            let v12 = 0;
            let v15 = 0;
            const v18 = eval(1337);
            // v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
        }
        const v19 = v5();
        // v19 = .unknown
        let v23 = 0;
        const v24 = v4 + 1;
        // v24 = .primitive
        v4 = v24;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();

function main() {
let v1 = undefined;
for (const v3 in "boolean") {
    for (const v6 in "object") {
        const v12 = {};
        // v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v13 = v12;
        const v14 = {...13.37,...v12,..."symbol",...1337,...v13};
        // v14 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "startsWith", "split", "padStart", "padEnd", "indexOf", "repeat", "replace", "includes", "charCodeAt", "substring", "lastIndexOf", "slice", "charAt", "concat", "codePointAt", "endsWith"])
    }
}
}
%NeverOptimizeFunction(main);
main();

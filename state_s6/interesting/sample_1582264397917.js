function main() {
for (let v6 = 0; v6 < 100; v6++) {
}
const v9 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["c", "a", "b", "__proto__", "constructor"], withMethods: ["d"])
let v10 = v9;
for (const v12 in "boolean") {
    try {
        let v15 = 0;
        const v16 = typeof 1;
        // v16 = .string
        const v18 = v16 === "string";
        // v18 = .boolean
        const v19 = v15 + 1;
        // v19 = .primitive
        v15 = v19;
        let v22 = 0;
        const v23 = v22 + 1;
        // v23 = .primitive
        v22 = v23;
        const v24 = v10.__proto__;
        // v24 = .object()
        v10 = v24;
    } catch(v32) {
    }
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v5 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
// v5 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b", "c", "constructor"], withMethods: ["d"])
let v6 = v5;
for (const v8 in "boolean") {
    try {
        const v9 = v6.__proto__;
        // v9 = .object()
        v6 = v9;
        let v19 = 0;
        const v20 = v19 + 1;
        // v20 = .primitive
        v19 = v20;
        v9.toString = RegExp;
    } catch(v21) {
    }
}
}
%NeverOptimizeFunction(main);
main();

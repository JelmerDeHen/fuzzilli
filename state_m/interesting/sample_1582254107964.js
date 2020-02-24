function main() {
const v2 = {c:13.37};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
const v5 = v2 != "object";
// v5 = .boolean
const v8 = "pvU0UUjoya" <= 1337;
// v8 = .boolean
try {
    const v9 = 127 instanceof 127;
    // v9 = .boolean
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();

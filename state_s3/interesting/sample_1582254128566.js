function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v1 = v0;
let v6 = 0;
do {
    v1[4096] = 9007199254740993;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
} while (v6 < 8);
}
%NeverOptimizeFunction(main);
main();

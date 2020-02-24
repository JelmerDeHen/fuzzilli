function main() {
let v2 = 0;
do {
    const v3 = {};
    // v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v5 = Object();
    // v5 = .object()
    const v6 = Object.seal(v5);
    // v6 = .object()
    const v7 = v2 + 1;
    // v7 = .primitive
    v2 = v7;
} while (v2 < 3);
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
function v1(v2,v3) {
    const v6 = Math.tanh(1337);
    // v6 = .number
    const v7 = v0[v6];
    // v7 = .unknown
}
for (let v11 = 0; v11 < 100; v11++) {
    const v12 = v1();
    // v12 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

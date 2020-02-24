function main() {
function v1(v2,v3) {
    const v5 = "EPSILON" << -4294967297;
    // v5 = .integer
    const v6 = v5 * v2;
    // v6 = .number
}
for (let v10 = 0; v10 < 100; v10++) {
    const v11 = v1();
    // v11 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

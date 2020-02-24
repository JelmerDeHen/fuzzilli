function main() {
function v3(v4,v5) {
    const v7 = -4294967297 << -4294967297;
    // v7 = .integer
    const v8 = v7 << -4294967297;
    // v8 = .integer
    const v9 = {e:v8};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
}
for (let v13 = 0; v13 < 100; v13++) {
    const v14 = v3();
    // v14 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

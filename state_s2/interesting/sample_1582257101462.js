function main() {
function v0(v1,v2) {
    const v4 = -4294967297 << -4294967297;
    // v4 = .integer
    const v5 = v4 << v1;
    // v5 = .integer
    const v6 = {e:v5};
    // v6 = .object(ofGroup: Object, withProperties: ["__proto__", "e"])
}
for (let v10 = 0; v10 < 100; v10++) {
    const v11 = v0();
    // v11 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

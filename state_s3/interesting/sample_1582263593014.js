function main() {
function v2(v3,v4) {
    let v6 = v3;
    const v7 = !v6;
    // v7 = .boolean
    const v8 = "object" + v7;
    // v8 = .primitive
}
for (let v12 = 0; v12 < 100; v12++) {
    const v13 = v2();
    // v13 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

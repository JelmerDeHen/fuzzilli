function main() {
function v2(v3,v4) {
    const v5 = Math.trunc(1337);
    // v5 = .number
    let v7 = 0;
    const v8 = v7 + 1;
    // v8 = .primitive
    return v5;
}
for (let v12 = 0; v12 < 100; v12++) {
    const v13 = v2();
    // v13 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

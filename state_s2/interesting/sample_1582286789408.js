function main() {
function v2(v3,v4) {
    const v6 = v3 > 1337;
    // v6 = .boolean
    const v7 = Math.floor(v6);
    // v7 = .number
    return v7;
}
for (let v11 = 0; v11 < 100; v11++) {
    const v12 = v2();
    // v12 = .unknown
    let v15 = 0;
    const v16 = v15 + 1;
    // v16 = .primitive
    v15 = v16;
}
}
%NeverOptimizeFunction(main);
main();

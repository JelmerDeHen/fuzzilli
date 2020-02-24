function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v6 = v5 + 1;
    // v6 = .primitive
    const v7 = "object" >> v6;
    // v7 = .integer
    return v7;
}
for (let v11 = 0; v11 < 100; v11++) {
    const v12 = v0();
    // v12 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

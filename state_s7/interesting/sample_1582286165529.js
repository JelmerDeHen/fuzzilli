function main() {
function v0(v1,v2) {
    const v6 = new Object();
    // v6 = .object()
    const v7 = v6[3];
    // v7 = .unknown
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
}
for (let v18 = 0; v18 < 100; v18++) {
    const v19 = v0();
    // v19 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

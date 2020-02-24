function main() {
function v0(v1,v2) {
    const v4 = new Object();
    // v4 = .object()
    const v5 = v4[3];
    // v5 = .unknown
    let v7 = 0;
    v4.valueOf = Object;
}
for (let v11 = 0; v11 < 100; v11++) {
    const v12 = v0();
    // v12 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

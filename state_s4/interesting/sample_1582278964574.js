function main() {
function v1(v2,v3,...v4) {
    let v7 = 0;
    const v8 = v4[v7];
    // v8 = .unknown
    const v9 = v7 + 1;
    // v9 = .primitive
    v7 = v9;
}
for (let v13 = 0; v13 < 100; v13++) {
    const v14 = v1(1000);
    // v14 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

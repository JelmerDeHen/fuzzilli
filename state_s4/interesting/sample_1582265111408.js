function main() {
function v0(v1,v2) {
    let v8 = 0;
    const v9 = 10 % 1;
    // v9 = .number
    const v10 = "boolean".__proto__;
    // v10 = .object()
    let v11 = v9;
    const v12 = v8 + 1;
    // v12 = .primitive
    v8 = v12;
}
for (let v17 = 0; v17 < 100; v17++) {
    const v18 = v0();
    // v18 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

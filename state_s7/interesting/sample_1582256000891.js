function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    v6 = v7;
    return v0;
}
const v8 = v0();
// v8 = .unknown
const v9 = new v8();
// v9 = .object()
}
%NeverOptimizeFunction(main);
main();

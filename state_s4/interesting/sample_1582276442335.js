function main() {
function v0(v1,v2) {
    for (let v7 = 0; v7 < 100; v7++) {
    }
    const v8 = Math.max(Math);
    // v8 = .unknown
}
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
for (let v14 = 0; v14 < 100; v14 = v14 + v12) {
    const v15 = v0();
    // v15 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2) {
    const v3 = v1 in v0;
    // v3 = .boolean
}
let v4 = v0;
const v5 = v0(v4);
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();

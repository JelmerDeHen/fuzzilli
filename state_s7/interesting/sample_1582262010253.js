function main() {
function v2(v3,v4) {
    let v8 = 0;
    const v10 = v8 + 1;
    // v10 = .primitive
    v8 = v10;
    for (const v12 in arguments) {
    }
}
const v14 = v2(1024,4.0);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

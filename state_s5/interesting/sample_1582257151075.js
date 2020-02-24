function main() {
function v0(v1,v2) {
    let v13 = 0;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    const v21 = v13 + 1;
    // v21 = .primitive
    v13 = v21;
    const v23 = Object();
    // v23 = .object()
    with (v23) {
        const v25 = typeof Array;
        // v25 = .string
    }
}
for (let v36 = 0; v36 < 100; v36++) {
    const v37 = v0();
    // v37 = .unknown
}
}
%NeverOptimizeFunction(main);
main();

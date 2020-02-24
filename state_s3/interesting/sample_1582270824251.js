function main() {
function v0(v1,v2) {
    let v5 = 0;
    do {
        let v8 = 0;
        do {
            const v9 = v8 + v5;
            // v9 = .primitive
            const v10 = v8 + 1;
            // v10 = .primitive
            v8 = v10;
        } while (v8 < 1);
        for (let v17 = 0; v17 < 100; v17++) {
        }
        const v18 = v5 + 1;
        // v18 = .primitive
        v5 = v18;
    } while (v5 < 8);
}
const v22 = v0();
// v22 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v10 = 4294967297 >= 0;
            // v10 = .boolean
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                let v17 = 0;
                v13 = v14;
            } while (v13 < 7);
            const v18 = v7 + 1;
            // v18 = .primitive
            v7 = v18;
        } while (v7 < 8);
    }
}
const v19 = v0();
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();

function main() {
function v0(v1,v2) {
    for (const v4 in "caller") {
        for (const v6 in "arguments") {
            let v9 = undefined;
            let v12 = -9007199254740991;
            let v15 = 0;
            const v16 = v15 + 1;
            // v16 = .primitive
            v15 = v16;
            do {
                const v17 = v12 + 1;
                // v17 = .primitive
                v12 = v17;
            } while (v12 < "species");
            for (const v19 in "replace") {
            }
        }
    }
}
const v20 = v0();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();

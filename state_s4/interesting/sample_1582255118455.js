function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            try {
                let v11 = 0;
                do {
                    const v12 = v11 + 1;
                    // v12 = .primitive
                    v11 = v12;
                } while (v11 < 7);
            } catch(v13) {
                function v14(v15,v16,v17,v18) {
                }
            }
            const v19 = v8 + 1;
            // v19 = .primitive
            v8 = v19;
        } while (v8 < 8);
    }
}
const v20 = v1();
// v20 = .unknown
const v21 = v1("a");
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();

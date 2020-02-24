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
            const v22 = v8 + 1;
            // v22 = .primitive
            v8 = v22;
        } while (v8 < 8);
    }
    const v24 = true & v3;
    // v24 = .integer
    return v24;
}
const v25 = v1();
// v25 = .unknown
const v26 = v1("a");
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();

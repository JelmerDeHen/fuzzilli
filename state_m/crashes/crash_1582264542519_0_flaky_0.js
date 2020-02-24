function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            try {
                const v11 = [13.37,13.37,-4294967297,13.37];
                const v12 = {length:v11,d:Uint8Array};
                function v13(v14,v15) {
                    for (const v16 in v12) {
                        let v19 = 0;
                        const v20 = v0();
                        do {
                            let v23 = 0;
                            while (v23 < 9) {
                                const v24 = v23 % 9;
                                const v25 = v24 + 1;
                                v23 = v25;
                            }
                            const v26 = v19 + 1;
                            v19 = v26;
                        } while (v19 < 8);
                    }
                }
                const v27 = v13();
                const v28 = v13();
            } catch(v29) {
            }
            const v30 = v7 + 1;
            v7 = v30;
        } while (v7 < 8);
    }
}
const v31 = v0();
}
%NeverOptimizeFunction(main);
main();

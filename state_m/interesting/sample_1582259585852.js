function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        function v9(v10,v11,v12,v13,v14) {
            return v9;
        }
        const v16 = v9();
        // v16 = .unknown
        for (let v23 = 0; v23 < 1337; v23++) {
            const v24 = v16(Reflect,Reflect,v23,v23);
            // v24 = .unknown
        }
        let v27 = 0;
        let v31 = 0;
        const v32 = v31 + 1;
        // v32 = .primitive
        v31 = v32;
        const v33 = "function" + 1;
        // v33 = .primitive
        v7 = v33;
    }
}
const v34 = v0();
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();

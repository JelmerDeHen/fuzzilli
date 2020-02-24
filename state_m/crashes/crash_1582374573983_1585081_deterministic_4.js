function main() {
const v1 = {length:isFinite};
const v3 = [1337,v1,1337,1337,1337];
function v4(v5,v6) {
    const v9 = new Uint16Array(1000);
    const v11 = {length:isFinite};
    const v13 = [1337,v11,1337,1337,1337];
    function v14(v15,v16) {
        const v17 = v9.keys();
        for (const v18 of v17) {
            let v21 = 0;
            while (v21 < 4) {
                const v22 = v21 + 1;
                v21 = v22;
            }
            const v23 = v14();
        }
    }
    const v24 = v13.forEach(v14);
}
const v25 = v3.forEach(v4);
}
%NeverOptimizeFunction(main);
main();

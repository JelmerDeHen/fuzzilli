function main() {
const v3 = new ArrayBuffer(1337);
const v4 = v3.slice();
const v5 = new DataView(v4);
function v6(v7,v8) {
    let v11 = 0;
    do {
        const v12 = v5.getInt8();
        let v14 = v12;
        while (v14 < 1) {
            const v15 = 8 + 1;
            v14 = v15;
        }
        try {
            const v16 = v6();
        } catch(v17) {
        }
    } while (v11 < 8);
}
const v18 = v6();
}
%NeverOptimizeFunction(main);
main();

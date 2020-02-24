function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    try {
        const v7 = [13.37];
        let v10 = 0;
        while (v10 < 6) {
            const v11 = v10 + 1;
            v10 = v11;
        }
        const v12 = v7.reduceRight(v1,6);
        const v13 = gc();
    } catch(v14) {
    }
}
const v15 = v1();
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [13.37,13.37];
const v6 = [1337,1337];
const v7 = [ArrayBuffer];
const v8 = {length:2,a:v4,c:13.37,constructor:ArrayBuffer,toString:13.37,e:"arguments"};
const v9 = {__proto__:v7,c:"arguments"};
let v10 = ArrayBuffer;
const v12 = [5.0,5.0,5.0,5.0];
function v13(v14,v15) {
    const v17 = [13.37,13.37,13.37,13.37,13.37];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            let v27 = 0;
            while (v27 < 7) {
                let v29 = 0;
                const v30 = v18();
                const v31 = v29 + 1;
                const v32 = v27 + 1;
                v27 = v32;
            }
            const v33 = [13.37,13.37,13.37,13.37,13.37];
            const v35 = [1337,v33,13.37,6];
            const v39 = Object.freeze(this,"a");
        } catch(v40) {
        }
    }
    const v41 = v17.filter(v18);
}
const v42 = v12.sort(v13);
}
%NeverOptimizeFunction(main);
main();

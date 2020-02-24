function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = [-4294967295,13.37,v4];
let v8 = v6;
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v15 = v7.concat(v8,v8,v7,"name");
        let v18 = 0;
        do {
            const v19 = v18 + 1;
            v18 = v19;
        } while (v18 < 5);
        for (let v23 = 0; v23 < 100; v23++) {
            const v24 = v9();
        }
        const v25 = v11.prototype;
    } catch(v26) {
    }
}
const v30 = 2.2250738585072014e-308 / 9007199254740991;
const v31 = [v30];
const v32 = new Int32Array();
let v33 = 1337;
v4.toString = v9;
const v34 = "asK9xrxa+P" + 1;
const v35 = 13.37 * v7;
const v37 = {get:v9,set:v9};
const v39 = Object.defineProperty(v31,"valueOf");
const v40 = v9();
}
%NeverOptimizeFunction(main);
main();

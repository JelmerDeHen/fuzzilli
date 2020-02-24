function main() {
const v3 = [13.37,13.37,13.37,13.37,13.37];
const v5 = [1337,1337];
const v6 = [];
const v7 = {c:13.37,a:4236891981,toString:v3};
const v8 = {constructor:4236891981,a:v5,length:v6,e:1337,c:"b"};
let v9 = v5;
const v12 = [1337,1337,1337,1337];
const v13 = {e:13.37,toString:v12};
let v15 = 0;
function v18(v19,v20,v21,v22) {
    'use strict'
    try {
        const v24 = {e:"undefined",...v22};
        const v25 = typeof v22;
        const v27 = v25 === "symbol";
        for (let v31 = 0; v31 < 100; v31++) {
            const v32 = v18();
        }
        const v34 = [13.37,13.37,13.37];
        const v35 = ["undefined",v34];
        const v38 = [5.0,5.0];
        const v40 = [1337,1337,1337,1337,1337];
        const v41 = [1337,Object,v40];
        const v42 = {__proto__:Object,valueOf:v38,b:v41,a:v40,c:Object};
        const v44 = [1337];
    } catch(v45) {
    }
}
const v46 = v18(v15,3,8);
}
%NeverOptimizeFunction(main);
main();

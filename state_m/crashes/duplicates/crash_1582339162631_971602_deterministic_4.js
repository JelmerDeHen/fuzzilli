function main() {
const v4 = {d:13.37,constructor:undefined,valueOf:undefined,b:13.37,c:13.37,e:undefined,a:236736532,length:"E"};
let v5 = v4;
const v8 = [1337,1337,1337,1337,1337];
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v17 = [13.37,13.37,13.37,13.37,13.37];
        for (const v18 in v5) {
            const v19 = v9();
        }
        const v21 = [1337,1337,1337,1337,1337];
        const v22 = [v21,v17,v17,13.37];
        const v23 = {__proto__:v22,c:v22};
        const v24 = {e:"name",c:v23,valueOf:eval,b:1337};
        const v26 = [13.37,13.37];
        const v28 = Proxy();
        for (const v30 in "boolean") {
            for (let v34 = 0; v34 < 10; v34++) {
                let v36 = 0;
            }
            let v38 = 0;
            function v39(v40,v41) {
            }
            const v42 = v39();
            for (let v46 = 0; v46 < 9; v46++) {
            }
        }
    } catch(v47) {
    }
}
const v48 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
const v50 = new Proxy(v8,v48);
v50[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

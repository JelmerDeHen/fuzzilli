function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
const v4 = [1337,1337,1337,1337];
const v5 = [1337,"matchAll"];
const v6 = {c:v2,e:v4,constructor:"matchAll",a:"matchAll"};
const v7 = {a:v2,e:v4};
let v8 = v6;
const v10 = {length:isFinite};
const v13 = [1337,v10,1337,1337,1337];
function v14(v15,v16) {
    let v18 = this;
    let v19 = v18;
    const v22 = new Proxy(v19,Object);
    let v23 = Object;
    try {
        const v24 = v23.assign(v19,"matchAll");
        function v25(v26,v27,v28,v29) {
            'use strict'
        }
        let v31 = 13.37;
        const v34 = [13.37,13.37,-4294967297,-4294967297];
        const v36 = [v34,5,v34];
    } catch(v37) {
        const v40 = [1337,1337,"MIN_VALUE",1337,1337];
        function v41(v42,v43,v44,v45) {
            'use strict'
            try {
                let v47 = 0;
                const v48 = v47 + 1;
                v45[3] = v45;
            } catch(v49) {
                let v51 = eval;
                const v52 = [];
                const v53 = {a:v52};
                const v54 = {__proto__:v45,constructor:v53,length:v52};
                const v58 = [-2331916614,-2331916614,-2331916614];
                const v59 = [3664180981,3664180981,"string","string"];
            }
            return v45;
        }
        const v60 = {deleteProperty:v41,set:v41,getPrototypeOf:v41,call:v41,preventExtensions:v41,isExtensible:v41,construct:v41,get:v41,ownKeys:v41,setPrototypeOf:1337,has:v41};
        const v62 = new Proxy(v40,v60);
        v62[1] = "MIN_VALUE";
    }
}
const v63 = v13.forEach(v14,"eeeRbEqfAO");
}
%NeverOptimizeFunction(main);
main();

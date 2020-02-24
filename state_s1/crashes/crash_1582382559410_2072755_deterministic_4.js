function main() {
const v3 = [13.37];
const v5 = [1,1,1];
const v6 = [];
const v7 = {e:v3,d:eval,c:13.37,valueOf:v6,__proto__:1};
const v8 = {e:v6,a:13.37,toString:"function"};
let v9 = v5;
const v11 = [5.0,5.0,5.0,5.0];
function v12(v13,v14) {
    const v16 = [13.37,13.37,13.37,13.37,13.37];
    function v18(v19,v20,v21,v22) {
        'use strict'
        const v25 = arguments + 1;
        const v27 = [1337,1337,"MIN_VALUE",1337,1337];
        function v28(v29,v30,v31,v32) {
            'use strict'
            try {
                let v35 = 0;
                while (v35 <= 4) {
                    const v36 = v35 + 1;
                    v35 = v36;
                }
                v32[3] = 0;
            } catch(v37) {
                let v38 = v25;
                const v39 = [];
                const v40 = {a:v39};
                const v41 = {__proto__:v32,constructor:v40,length:v39};
                const v42 = v38 in v41;
            }
            return v32;
        }
        const v43 = {deleteProperty:v28,set:v28,getPrototypeOf:v28,call:v28,preventExtensions:v28,isExtensible:v28,construct:v28,get:v28,ownKeys:v28,setPrototypeOf:1337,has:v28};
        const v45 = new Proxy(v27,v43);
        v45[1] = "MIN_VALUE";
        try {
            const v48 = [13.37,13.37,13.37,13.37,13.37];
            const v50 = [1337,v48,13.37,6];
            const v52 = Object.freeze();
            const v56 = {get:Number,set:Number};
            const v58 = Object.defineProperty(this,1337,v56);
        } catch(v59) {
        }
    }
    const v60 = v16.filter(v18,v16);
    let v62 = 0;
    const v63 = v62 + 1;
}
const v64 = v11.sort(v12);
}
%NeverOptimizeFunction(main);
main();

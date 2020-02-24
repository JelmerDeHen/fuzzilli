function main() {
let v5 = 0;
const v6 = v5 + 1;
const v7 = [13.37];
const v9 = [1337,1337,1337,1337];
const v10 = [0,13.37];
const v11 = {a:1337,constructor:v7,toString:"MAX_VALUE",__proto__:0};
const v12 = {length:13.37,b:1337,toString:13.37,valueOf:Array,a:Array,constructor:v11,c:v11};
for (const v14 in "object") {
    const v17 = [1337,1337,1337,1337,1337];
    function v18(v19,v20,v21,v22) {
        'use strict'
        try {
            v22[3] = v22;
        } catch(v23) {
            const v27 = [-2588121454];
            let v28 = v27;
            const v32 = [13.37,-65536,677821.9137638563];
            let v34 = 0;
            while (v34 < 1337) {
                const v35 = v32.push(v28);
                const v36 = v34 + 1;
                v34 = v36;
            }
            const v37 = [13.37,13.37,13.37];
            const v39 = new Uint32Array();
            const v42 = [13.37,"boolean","boolean",13.37];
            const v45 = ["d",isFinite,isFinite,13.37];
        }
        return v17;
    }
    const v46 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
    function v48(v49,v50,v51,v52) {
        'use strict'
    }
    const v53 = new Proxy(v17,v46);
    v53[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

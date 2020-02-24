function main() {
const v2 = [13.37];
const v4 = [1337,1337];
const v5 = [13.37,1337];
let v6 = this;
for (const v9 in "object") {
    const v12 = [];
    const v13 = {length:"constructor",e:1337,c:v12,a:1337,toString:"symbol"};
    function v15(v16,v17,v18,v19) {
        'use strict'
        try {
            for (let v23 = 0; v23 < 100; v23++) {
                const v24 = v15();
            }
            const v26 = Float64Array();
            const v27 = {};
            let v28 = v27;
            const v32 = [13.37,13.37,13.37];
            let v33 = v32;
            const v34 = [2153514987,13.37,13.37,13.37,v19];
            const v35 = [v28,v34,v34];
        } catch(v36) {
        }
    }
    const v37 = {deleteProperty:v15,set:v15,getPrototypeOf:v15,call:v15,preventExtensions:v15,isExtensible:v15,construct:v15,get:v15,ownKeys:v15,setPrototypeOf:v15,has:v15};
    const v39 = new Proxy(v13,v37);
    v39[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

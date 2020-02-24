function main() {
const v3 = [13.37,13.37,13.37];
const v5 = [1337,1337,1337,1337,1337];
const v6 = [1337,v3,963661025];
const v7 = {toString:963661025,e:v3};
const v8 = {valueOf:"HZXBxxGQPi",b:v5,e:13.37};
const v11 = [1337,1337,"MIN_VALUE",1337,1337];
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        let v19 = 0;
        const v20 = v19 + 1;
        for (let v24 = 0; v24 < 100; v24++) {
            const v25 = v12(v3,v20);
        }
        const v26 = v20[4];
        let v27 = 1;
        function v28(v29,v30,v31,v32,v33) {
            const v34 = v32(v29,v15);
            return v16;
        }
        const v35 = v15();
    } catch(v36) {
    }
}
const v37 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:1337,has:v12};
const v39 = new Proxy(v11,v37);
v39[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();

function main() {
const v4 = [13.37];
const v6 = [1337,1337];
const v7 = [v4,NaN,-4159222510];
const v8 = {c:v7};
const v9 = {c:v7,e:13.37,a:v8,valueOf:-4159222510,b:"boolean",constructor:v6};
for (const v11 in "object") {
    const v13 = "MIN_VALUE"[1337];
    for (let v17 = 0; v17 < 10; v17++) {
        "object".valueOf = v13;
    }
    const v19 = [1337,1337,1337,1337,1337];
    function v20(v21,v22,v23,v24) {
        'use strict'
        try {
            v24[3] = v24;
        } catch(v25) {
            const v30 = Math.hypot(-1970853828,13.37,"boolean");
            const v31 = [v24];
            try {
                const v34 = eval("M.hedhtVn+");
            } catch(v35) {
            }
        }
        return v9;
    }
    const v36 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v20,setPrototypeOf:v20,has:v20};
    const v38 = new Proxy(v19,v36);
    v38[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();

function main() {
const v3 = [1337,1337];
let v4 = v3;
function v6(v7,v8) {
    for (const v9 of "MAX_SAFE_INTEGER") {
        const v10 = {isExtensible:String,apply:v9,call:v8,has:RegExp,defineProperty:RegExp};
        const v12 = new Proxy(v4,v10);
    }
    const v13 = v6();
}
const v14 = v6();
}
%NeverOptimizeFunction(main);
main();

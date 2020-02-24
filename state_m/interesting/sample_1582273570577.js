function main() {
function v2(v3,v4) {
    let v6 = 0;
    const v7 = v6 + 1;
    // v7 = .primitive
    let v8 = v7;
    function v9(v10,v11) {
        v9.prototype = 1337;
        return v9;
    }
    const v13 = v9();
    // v13 = .unknown
    v13.toString = v8;
    v13.toString = v3;
}
const v14 = v2(0,0);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();

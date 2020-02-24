function main() {
let v1 = 1337;
function v2(v3,v4) {
    v2.prototype = 1337;
    return v2;
}
const v6 = v2();
// v6 = .unknown
v6.toString = v1;
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
}
%NeverOptimizeFunction(main);
main();

function main() {
const v33 = {e:13.37};
// v33 = .object(ofGroup: Object, withProperties: ["e", "__proto__"])
let v34 = 1337;
let v37 = 0;
const v38 = v37 + 1;
// v38 = .primitive
v37 = v38;
const v40 = {length:gc,a:v33,constructor:0,b:v34,__proto__:1337,b:v37,e:"object",valueOf:3};
// v40 = .object(ofGroup: Object, withProperties: ["e", "a", "valueOf", "constructor", "__proto__", "b"], withMethods: ["length"])
function v41(v42,v43,v44) {
    return v34;
}
}
%NeverOptimizeFunction(main);
main();

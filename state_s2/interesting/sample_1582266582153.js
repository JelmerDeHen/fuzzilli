function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v8 = {__proto__:null,b:-2054192748};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
let v25 = 0;
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
const v30 = v25 + 1;
// v30 = .primitive
v25 = v30;
}
%NeverOptimizeFunction(main);
main();

function main() {
let v1 = Promise;
let v6 = 0;
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v11 = v6 + 1;
// v11 = .primitive
v6 = v11;
const v13 = {set:Boolean};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v15 = Object.defineProperty(this,1723028408,v13);
// v15 = .undefined
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
}
%NeverOptimizeFunction(main);
main();

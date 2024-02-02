function defangIPaddr(nums) {
  return nums.split(".").join("[.]");
}

let address1 = "1.1.1.1";
console.log(defangIPaddr(address1));

let address2 = "255.100.50.0";
console.log(defangIPaddr(address2));

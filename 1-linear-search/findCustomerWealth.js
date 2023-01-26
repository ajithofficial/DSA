// LeetCode - 1672. Richest Customer Wealth
var maximumWealth = function(accounts) {
    let richestCus = 0;
    for(let i = 0; i < accounts.length; i++) {
        if(richestCus < sumWealth(accounts[i])) {
            richestCus = sumWealth(accounts[i]);
        };
    }
    return richestCus;
};

var sumWealth = function(accounts) {
    let eachCustomerWealth = 0;
    for(let j = 0; j < accounts.length; j++) {
        eachCustomerWealth += accounts[j];
    }
    return eachCustomerWealth;
}

const result = maximumWealth([[1,5],[7,3],[3,5]]);
console.log(result);
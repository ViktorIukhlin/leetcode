var longestCommonPrefix = function (strs) {
    let prefix = "";
    if (strs === null || strs.length === 0) return prefix;
    if (strs.length === 1) return strs[0];

    for (let i = 0; i < strs[0].length; i++) {
        if (!strs[0][i]) return prefix;

        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) return prefix;
        }

        prefix = prefix + strs[0][i];
    }

    return prefix;
};

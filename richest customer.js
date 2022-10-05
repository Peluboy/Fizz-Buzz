class Solution {
    fun maximumWealth(accounts: Array<IntArray>): Int {
        var result = -1;
        for (i in accounts) {
            var sum = 0;
            for (j in i) {
                sum +=j
            }
            result = Math.max(result,sum)
        }
        return result
    }

    fun maximumWealth(accounts: Array<IntArray>): Int {
        var result = -1;
        accounts.forEach { banks ->
            var sum = 0;
            banks.forEach { money -> sum +=money }
            if (sum > result) result = sum
        }
        return result
    }
}
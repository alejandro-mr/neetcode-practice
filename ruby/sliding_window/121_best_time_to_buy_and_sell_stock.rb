# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  i = 0
  j = 1
  profit = 0

  while j < prices.size
    if prices[j] > prices[i]
      profit = profit > prices[j] - prices[i] ? profit : prices[j] - prices[i]
    else
      i = j
    end

    j += 1
  end

  profit
end

def test
  # Test cases

  # result: 5
  puts max_profit([7, 1, 5, 3, 6, 4])

  # result: 0
  puts max_profit([7, 6, 4, 3, 1])

  # result: 1
  puts max_profit([1, 2])
end

test

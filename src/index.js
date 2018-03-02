module.exports = function getZerosCount(number) {
    var countZeros = 0;

        for (var i = 5; i <= number; i = i + 5) {
            var countIteration = i;

            while  (countIteration % 5 === 0) {
                countIteration = countIteration / 5;
                countZeros++;
            }
        }

        return countZeros;
};

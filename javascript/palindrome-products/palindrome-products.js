var Palindromes = function (factorList) {
    this.maxFactor = factorList.maxFactor
    this.minFactor = factorList.minFactor ? factorList.minFactor : 1
    this.maxFactors = []
    this.minFactors = []
    this.maxValue = this.minFactor
    this.minValue = this.maxFactor
}

Palindromes.prototype.largest = function() {
    console.log('in largest with '+this.maxFactor,this.maxFactors)
    var factor = this.maxFactors[0]
    var largest = 0
    if (factor && factor.length>1) {
        var value = factor[0]*factor[1]
        this.maxValue = value
        largest = {value:value,factors:this.maxFactors}
    }
    return largest
}

Palindromes.prototype.calculate = function(num) {
    console.log('in calculate with '+num)
    var factors = []
    var min = 0;
    if (this.minFactor == 1) {
        factors.push([1,num])
        min = 2
    } else {
        min = this.minFactor
    }
    var half = Math.floor(num/2)
    for (var i=min;i<half;i++) {
        var rem = num % i
        if (rem == 0) {
            var div = num / i
            console.log('factor pushing='+i,div)
            factors.push([i,div])
        }
    }
    return factors
}

Palindromes.prototype.isPalindrome = function(num) {
    var palin = num.toString()
    if (palin.length == 1) return true
    return (palin == palin.split("").reverse().join(""))
}

Palindromes.prototype.generate = function() {
    console.log('in generate')
    var maxProduct = this.minFactor*this.maxFactor
    var minProduct = this.maxFactor*this.maxFactor
    console.log('min,max=',this.minFactor,this.maxFactor)
    for (var i=this.minFactor;i<=this.maxFactor;i++) {
        for (var j=this.maxFactor;j>=this.minFactor;j--) {
            var product = i*j
            if (this.isPalindrome(product) && product >= maxProduct) {
                console.log('pal product = '+product)
                console.log('isPal='+product)
                console.log('got i,j=',i,j)
                if (!this.contains(this.maxFactors,i,j)) {
                    console.log('max pushing ',i,j)
                    this.maxFactors.push([i,j])
                }
                this.removeMax(product)
                maxProduct = product
            }
            if (this.isPalindrome(product) && product <= minProduct) {
                if (!this.contains(this.minFactors,i,j)) {
                    console.log('min pushing ',i,j)
                    this.minFactors.push([i,j])
                }
                this.removeMin(product)
                minProduct = product
            }
        }
    }
    console.log('maxProd='+maxProduct)
    this.maxValue = maxProduct
    this.largest()
    this.minValue = minProduct
    this.smallest()
    //console.log('calling calculate')
    //this.maxFactors = calculate(this.maxFactor)
}

Palindromes.prototype.contains = function(factors,i,j) {
    console.log('in contains with '+i,j)
    console.log('factors='+factors+' with length='+factors.length)
    for (var k=0;k<factors.length;k++) {
        var factor = factors[k]
        var zero = factor[0]
        var one = factor[1]
        if ((zero==i && one==j) || (zero==j && one==i)) {
            console.log('factor='+zero, one)
            console.log('returning true')
            return true
        }
    }
    console.log('returning false')
    return false
}


Palindromes.prototype.removeMax = function(max) {
    console.log('in removeMax with '+max)
    console.log('factors='+this.maxFactors+' with length='+this.maxFactors.length)
    for (var k=0;k<this.maxFactors.length;k++) {
        var factor = this.maxFactors[k]
        if (factor && factor.length>1) {
            var zero = factor[0]
            var one = factor[1]
            if (zero*one < max) {
                console.log('removingMax factor='+factor)
                this.maxFactors.splice(k,1)
                this.removeMax(max)
            }
        }
    }
}

Palindromes.prototype.removeMin = function(min) {
    console.log('in removeMin with '+min)
    console.log('factors='+this.minFactors+' with length='+this.minFactors.length)
    for (var k=0;k<this.minFactors.length;k++) {
        var factor = this.minFactors[k]
        if (factor && factor.length>1) {
            var zero = factor[0]
            var one = factor[1]
            if (zero*one > min) {
                console.log('removingMin factor='+factor)
                this.minFactors.splice(k,1)
                this.removeMin(min)
            }
        }
    }
}

Palindromes.prototype.smallest = function() {
    console.log('in smallest with '+this.minFactor,this.minFactors)
    var factor = this.minFactors[0]
    var value = 0
    if (factor && factor.length > 1) {
        value = factor[0]*factor[1]
        console.log('new min value='+value)
    }
    this.minValue = value
    var smallest = {value:this.minValue,factors:this.minFactors}
    return smallest
}

module.exports = Palindromes
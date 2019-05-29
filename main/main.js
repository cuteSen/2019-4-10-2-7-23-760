module.exports = function main(inputs) {
    // write your code here...
    var price = 6;
    if(inputs.distance<=2)
    {
        price+=Math.round(inputs.parkTime*0.25)
        return price;
    }
    if(inputs.distance>=8)
    {
        price+=Math.round(inputs.parkTime*0.25+(inputs.distance-8)*1.2+4.8)
        return price;
    }
    else
    {
        price+=Math.round(inputs.parkTime*0.25+(inputs.distance-2)*0.8)
        return price;
    }
};

/*
 * Author: Rakesh P Gopal (https://github.com/rakesh-gopal)
 * License: http://www.apache.org/licenses/
 */

var Baby = (function(){

    var version = "0.1";

    var baby = function(){
        return baby;
    };

    baby.get = function() {
        alert("baby says hi");
    };
    baby.version = version;
    return baby;
}());

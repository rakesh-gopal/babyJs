/*
 * Author: Rakesh P Gopal (https://github.com/rakesh-gopal)
 * License: http://www.apache.org/licenses/
 */

var AM = (function() {
    var version = "0.1";

    var am = {};

    am.SavingsByTimeslice = Baby({
        getUrl : "http://corp.actmobile.com/api/users/by_timeslice?&startDate=2014-11-11&endDate=2014-11-18&slice=day",
    });

    am.onLoad = function(callBack) {
        callBack();
    };

    am.version = version;
    return am;

}());

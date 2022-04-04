
function Mock() { }

Mock.mobile_prefix = ["38096", "38097", "38098", "38068", "38067", "38050", "38066", "38095",
    "38099", "38063", "38093", "38073", "", "131", "132", "155", "156", "133", "153"];

Mock.numeric = "0123456789";

Mock.random = function (len, list) {
        if (len <= 1) { len = 1; }
        var s = "";
        var n = list.length;
        if (typeof list === "string") {
            while (len-- > 0) {
                s += list.charAt(Math.random() * n)
            }
        } else if (list instanceof Array) {
            while (len-- > 0) {
                s += list[Math.floor(Math.random() * n)]
            }
        }
        return s;
    }

Mock.getMobile = function () {
        return Mock.random(1, Mock.mobile_prefix)
            + Mock.random(6, Mock.numeric);
    }

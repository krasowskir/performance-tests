var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4937",
        "ok": "4937",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2423",
        "ok": "2423",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2234",
        "ok": "2234",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3635",
        "ok": "3634",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4318",
        "ok": "4318",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4570",
        "ok": "4570",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 189,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 127,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2684,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    }
},
contents: {
"req_createaddressre-d32a7": {
        type: "REQUEST",
        name: "CreateAddressRequest",
path: "CreateAddressRequest",
pathFormatted: "req_createaddressre-d32a7",
stats: {
    "name": "CreateAddressRequest",
    "numberOfRequests": {
        "total": "3000",
        "ok": "3000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4937",
        "ok": "4937",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2423",
        "ok": "2423",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2234",
        "ok": "2235",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3634",
        "ok": "3634",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4318",
        "ok": "4318",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4570",
        "ok": "4570",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 189,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 127,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2684,
    "percentage": 89
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "300",
        "ok": "300",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

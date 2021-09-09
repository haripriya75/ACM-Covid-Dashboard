const array = ["AP", "AN", "AR", "AS", "BR", "CH", "CT", "DN", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KL", "LA", "LD", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PY", "PB", "RJ", "SK", "TN", "TG", "TR", "UP", "UT", "WB"];
table_url = "https://peter316.pythonanywhere.com/api/v1/regions/vaccine/todaytotal"
var variable3 = getdata(table_url);
variable3.then((value3) => {
    console.log(value3);
    for (let i = 0; i < (value3.length) - 2; i++) {

        $("#itistable2 tbody").append("<tr>" +
            "<td>" + value3[i].state + "</td>" +
            "<td>" + value3[i].total_vaccinations + "</td>" +
            "</tr>");
    }

});
async function getdata(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function verify_cowin() {
    var dropd = document.getElementById("state");
    let b = dropd.value;
    random_cowin(b);
}

function random_cowin(c) {
    graph1_url = "https://peter316.pythonanywhere.com/api/v1/region/" + c + "/vaccine/typewise"
    var graph_variable = getdata(graph1_url);
    graph_variable.then((graph1_value) => {
        console.log(graph1_value);
        var datause = [];
        var datause1 = [];
        var datause2 = [];
        var datause3 = [];
        for (let index = 0; index < graph1_value.length; index++) {

            datause1.push(graph1_value[index].total_covishield);
            datause2.push(graph1_value[index].total_covaxin);
            datause3.push(graph1_value[index].total_sputnik);
            datause.push(graph1_value[index].date);

        }



        const typewise_graph_var = document.getElementById("typewise_graph").getContext('2d');
        if (window.bar != undefined)
            window.bar.destroy();
        window.bar = new Chart(typewise_graph_var, {
            type: 'bar',
            data: {
                labels: datause, //x axis
                datasets: [{
                        label: "covshield", // categories 
                        data: datause1, //y axis
                        backgroundColor: [
                            // 'rgba(255, 99, 132, 0.2)',
                            // 'rgba(54, 162, 235, 0.2)',
                            // 'rgba(255, 206, 86, 0.2)',
                            // 'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            // 'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            // 'rgba(255, 99, 132, 1)',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        maintainAspectRatio: false,
                        ticks: {
                            scaleOverride: true,
                            stepSize: ("10,00,000"),
                            scaleStartValue: 0,
                        },
                        yAxes: [{
                            barPercentgender: 2.0,
                            categoryPercentage: 2.0,
                        }],

                    },
                    {
                        label: "covaxin", // categories 
                        data: datause2, //y axis
                        backgroundColor: [
                            // 'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            // 'rgba(255, 206, 86, 0.2)',
                            // 'rgba(75, 192, 192, 0.2)',
                            // 'rgba(153, 102, 255, 0.2)',
                            // 'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            // 'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)'
                        ],

                        borderWidth: 1,
                        maintainAspectRatio: false,
                        ticks: {
                            scaleOverride: true,
                            stepSize: ("10,00,000"),
                            scaleStartValue: 0,
                        },
                        yAxes: [{
                            barPercentage: 2.0,
                            categoryPercentage: 2.0,
                        }],

                    },
                    {
                        label: "sptunik", // categories 
                        data: datause3, //y axis
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            // 'rgba(54, 162, 235, 0.2)',
                            // 'rgba(255, 206, 86, 0.2)',
                            // 'rgba(75, 192, 192, 0.2)',
                            // 'rgba(153, 102, 255, 0.2)',
                            // 'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)'
                        ],

                        borderWidth: 1,
                        maintainAspectRatio: false,
                        ticks: {
                            scaleOverride: true,
                            stepSize: ("10,00,000"),
                            scaleStartValue: 0,
                        },
                        yAxes: [{
                            barPercentage: 2.0,
                            categoryPercentage: 2.0,
                        }],

                    }
                ]

            },
        })
    });
    agewise_url = "https://peter316.pythonanywhere.com/api/v1/region/" + c + "/vaccine/agewise";
    var age_pie = getdata(agewise_url);
    age_pie.then((age_pie_value) => {

        var ctx1 = document.getElementById("agewise_pie").getContext("2d");
        if (window.doughnut != undefined)
            window.doughnut.destroy();
        window.doughnut = new Chart(ctx1, {
            type: "doughnut",
            data: {
                labels: ["18-45", "45-60", "60 & above"],
                datasets: [{
                    label: "No. of ppl like this color",
                    data: [age_pie_value.age18_45__sum, age_pie_value.age45_60__sum, age_pie_value.age60__sum],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(36, 216, 36, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(36, 216, 36, 1)",
                    ],
                    borderWidth: 1,

                }]
            },

        });
    })
    genderwise_url = "https://peter316.pythonanywhere.com/api/v1/region/" + c + "/vaccine/genderwise";
    var gender_pie = getdata(genderwise_url);
    gender_pie.then((gender_pie_value) => {
        console.log(gender_pie_value);
        var ctx2 = document.getElementById("genderwise_pie").getContext("2d");
        if (window.doughnut2 != undefined)
            window.doughnut2.destroy();
        window.doughnut2 = new Chart(ctx2, {
            type: "doughnut",
            data: {
                labels: ["male", "female", "trans"],
                datasets: [{
                    label: "No. of ppl like this color",
                    data: [gender_pie_value.male_vcc__sum, gender_pie_value.female_vcc__sum, gender_pie_value.transgender_vcc__sum],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(36, 216, 36, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(36, 216, 36, 1)",
                    ],
                    borderWidth: 1,

                }]
            },

        });
    })
    doses_url = "https://peter316.pythonanywhere.com/api/v1/region/" + c + "/vaccine/timeseries"
    var doses_variable = getdata(doses_url);
    doses_variable.then((doses_value) => {
        console.log(doses_variable);
        var date = [];
        var first = [];
        var second = [];
        for (let k = 0; k < (doses_value.length); k++) {
            first.push(doses_value[k].first_dose);
            second.push(doses_value[k].second_dose);
            date.push(doses_value[k].date);
        }
        const f_doses_graph_var = document.getElementById("firstdose_graph").getContext('2d');
        if (window.bar1 != undefined)
            window.bar1.destroy();
        window.bar1 = new Chart(f_doses_graph_var, {
            type: 'bar',
            data: {
                labels: date, //x axis
                datasets: [{
                    label: "first dose", // categories 
                    data: first, //y axis
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],

                    borderWidth: 1,
                    maintainAspectRatio: false,
                    yAxes: [{
                        barPercentage: 2.0,
                        categoryPercentage: 2.0,
                    }],

                }],
            },
        })
        const s_doses_graph_var = document.getElementById("seconddose_graph").getContext('2d');
        if (window.bar2 != undefined)
            window.bar2.destroy();
        window.bar2 = new Chart(s_doses_graph_var, {
            type: 'bar',
            data: {
                labels: date, //x axis
                datasets: [{
                    label: "second dose", // categories 
                    data: first, //y axis
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],

                    borderWidth: 1,
                    maintainAspectRatio: false,
                    yAxes: [{
                        barPercentage: 2.0,
                        categoryPercentage: 2.0,
                    }],

                }],
            },
        })
    })
}
random_cowin("IND");
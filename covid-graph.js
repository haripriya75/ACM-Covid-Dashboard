// API and DATA 
const array = ["AP", "AN", "AR", "AS", "BR", "CH", "CT", "DN", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KL", "LA", "LD", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PY", "PB", "RJ", "SK", "TN", "TG", "TR", "UP", "UT", "WB"];
// const array2 = ["AP1", "AN1", "AR1", "AS1", "BR1", "CH1", "CT1", "DN1", "DL1", "GA1", "GJ1", "HR1", "HP1", "JK1", "JH1", "KL1", "LA1", "LD1", "MP1", "MH1", "MN1", "ML1", "MZ1", "NL1", "OR1", "PY1", "PB1", "RJ1", "SK1", "TN1", "TG1", "TR1", "UP1", "UT1", "WB1"];
urlll = "https://peter316.pythonanywhere.com/api/v1/regions/cases/todaytotal"
var variable3 = getdata(urlll);
variable3.then((value3) => {
    console.log(value3);
    var totalcases = [];
    var states = [];
    for (let i = 0; i < 37; i++) {

        totalcases.push(value3[i].total_cases);
        states.push(value3[i].state);
        $("#itistable tbody").append("<tr>" +
            "<td>" + value3[i].state + "</td>" +
            "<td>" + value3[i].total_cases + "</td>" +
            "</tr>");
    }
    // totalcases.splice(13, 1);
    // states.splice(13, 1);
    var ctx2 = document.getElementById("bleh1").getContext("2d");
    // const gradientcolor = ctx2.createLinearGradient(0, 100, 0, 90)
    // gradientcolor.addColorStop(0, "#04C780");
    // gradientcolor.addColorStop(1, "white");

    var bleh1 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: states,
            datasets: [{
                label: "Total no. of cases",
                data: totalcases,
                backgroundColor: [

                    "rgba(75, 192, 192, 0.5)",
                    "rgba(54, 162, 235,0.5)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"
                ],
                borderColor: [

                    "rgba(75, 192, 192, 1)",
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)"
                ],
                borderWidth: 1,
                fill: true,
                lineTension: 0.4,

            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

});

const a = verify.b;


let api_url = "https://peter316.pythonanywhere.com/api/v1/region/" + a + "/cases";
async function getdata(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function verify() {
    var dropd = document.getElementById("state");
    let b = dropd.value;
    random(b);
}

function random(c) {


    let url = "https://peter316.pythonanywhere.com/api/v1/region/" + c + "/cases";
    var variable = getdata(url);
    variable.then((value) => {
        var ctx1 = document.getElementById("piechart").getContext("2d");
        if (window.doughnut != undefined)
            window.doughnut.destroy();
        window.doughnut = new Chart(ctx1, {
            type: "doughnut",
            data: {
                labels: ["Confirmed cases", "Deaths", "recovered"],
                datasets: [{
                    label: "No. of ppl like this color",
                    data: [value.confirmed__sum, value.deceased__sum, value.recovered__sum],
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
        document.getElementById("total").innerHTML = value.confirmed__sum;
        document.getElementById("recovered").innerHTML = value.recovered__sum;
        document.getElementById("deaths").innerHTML = value.deceased__sum;
        document.getElementById("total").style.color = "rgb(230, 227, 227)";
        document.getElementById("recovered").style.color = "rgb(230, 227, 227)";
        document.getElementById("deaths").style.color = "rgb(230, 227, 227)";
        document.getElementById("total").style.fontSize = "xx-large";
        document.getElementById("recovered").style.fontSize = "xx-large";
        document.getElementById("deaths").style.fontSize = "xx-large";
        urll = "https://peter316.pythonanywhere.com/api/v1/region/" + c + "/cases/timeseries";
        var variable2 = getdata(urll);
        variable2.then((value2) => {
            var datause = [];
            var datause1 = [];
            var datause2 = [];
            var datause3 = [];
            for (let index = 0; index < value2.length; index++) {

                datause1.push(value2[index].confirmed);
                datause2.push(value2[index].deceased);
                datause3.push(value2[index].recovered);
                datause.push(value2[index].date);

            }


            const ctx = document.getElementById("bleh").getContext('2d');
            if (window.bar != undefined)
                window.bar.destroy();
            window.bar = new Chart(ctx, {
                type: 'bar',

                data: {
                    labels: datause, //x axis
                    datasets: [{
                            label: "confirmed", // categories 
                            data: datause1, //y axis
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
                            yAxes: [{
                                ticks: {
                                    fontColor: "white",
                                },
                                barPercentage: 2.0,
                                categoryPercentage: 2.0,
                            }],


                        },
                        {
                            label: "deceased", // categories 
                            data: datause2, //y axis
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
                            yAxes: [{
                                barPercentage: 2.0,
                                categoryPercentage: 2.0,
                            }],

                        },
                        {
                            label: "recovered", // categories 
                            data: datause3, //y axis
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

                            yAxes: [{
                                barPercentage: 2.0,
                                categoryPercentage: 2.0,
                            }],

                        }
                    ]

                },
            })


        });

    })
}
// GRAPHS
random("IND");
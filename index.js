const ctx2 = document.getElementById('line-chart').getContext('2d')
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data:{
        datasets:[{
            backgroundColor: "#FFCDD2"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Daftar 5 Harga Kontrak Terbesar 2017'
        },
        plugins: {
            datasource: {
                rowMapping: 'index',
                datasetLabels: "2017!I3",
                url: './Data_Gabungan.xlsx',
                indexLabels: '2017!H4:H8',
                data: '2017!I4:I8'
            }
        },
    }
})
const ctx3 = document.getElementById('line-chart2').getContext('2d')
const chart3 = new Chart(ctx3, {
    type: 'bar',
    data:{
        datasets:[{
            backgroundColor: "#FFCDD2"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Daftar 5 Harga Kontrak Terbesar 2018'
        },
        plugins: {
            datasource: {
                rowMapping: 'index',
                datasetLabels: "2018!I3",
                url: './Data_Gabungan.xlsx',
                indexLabels: '2018!H4:H8',
                data: '2018!I4:I8'
            }
        },
    }
})
const ctx4 = document.getElementById('line-chart3').getContext('2d')
const chart4 = new Chart(ctx4, {
    type: 'bar',
    data:{
        datasets:[{
            backgroundColor: "#FFCDD2"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Daftar 5 Harga Kontrak Terbesar 2019'
        },
        plugins: {
            datasource: {
                rowMapping: 'index',
                datasetLabels: "2019!I3",
                url: './Data_Gabungan.xlsx',
                indexLabels: '2019!H4:H8',
                data: '2019!I4:I8'
            }
        },
    }
})
const ctx5 = document.getElementById('line-chart4').getContext('2d')
const chart5 = new Chart(ctx5, {
    type: 'bar',
    data:{
        datasets:[{
            backgroundColor: "#FFCDD2"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Daftar 5 Harga Kontrak Terbesar 2020'
        },
        plugins: {
            datasource: {
                rowMapping: 'index',
                datasetLabels: "2020!I3",
                url: './Data_Gabungan.xlsx',
                indexLabels: '2020!H4:H8',
                data: '2020!I4:I8'
            }
        },
    }
})
const ctx6 = document.getElementById('line-chart5').getContext('2d')
const chart6 = new Chart(ctx6, {
    type: 'bar',
    data:{
        datasets:[{
            backgroundColor: "#FFCDD2"
        }
    ]},
    plugins: [ChartDataSource],
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Daftar 5 Harga Kontrak Terbesar 2021'
        },
        plugins: {
            datasource: {
                rowMapping: 'index',
                datasetLabels: "2021!I3",
                url: './Data_Gabungan.xlsx',
                indexLabels: '2021!H4:H8',
                data: '2021!I4:I8'
            }
        },
    }
})
const ctx = document.getElementById('pie-chart').getContext('2d')
const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

const chart = new Chart(ctx, {
    type: 'pie',
    plugins: [ChartDataSource],
    data: {
        datasets: [{
            type: 'pie',
            yAxisID: 'temperature',
            backgroundColor: [randomRGB(), randomRGB(), randomRGB(), randomRGB(), randomRGB(),
                randomRGB(), randomRGB(), randomRGB(), randomRGB(), randomRGB(),
                randomRGB(), randomRGB(), randomRGB(), randomRGB(), randomRGB(),
                randomRGB(), randomRGB(), randomRGB(), randomRGB(), randomRGB(), randomRGB() 
            ],
            tension: 0,
            fill: true
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Daftar Pemenang Terbanyak Dalam 5 Tahun'
        },
        plugins: {
            datasource: {
                rowMapping: 'index',
                datasetLabels: "Pemenang_Terbanyak!B3",
                url: './Data_Gabungan.xlsx',
                indexLabels: 'Pemenang_Terbanyak!C4:C24',
                data: 'Pemenang_Terbanyak!B4:B24',
            }
        },
    }
})
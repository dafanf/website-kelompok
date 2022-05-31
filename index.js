const ctx = document.getElementById('line-chart').getContext('2d')
// const chart = new Chart(ctx, {
//     type: 'bar',
//     plugins: [ChartDataSource],
//     options: {
//         title: {
//             display: true,
//             fontSize: 20,
//             text: 'Daftar 5 Harga Kontrak Terbesar'
//         },
//         plugins: {
//             datasource: {
//                 rowMapping: 'index',
//                 datasetLabels: "2017!I3",
//                 url: 'data_gabungan.xlsx',
//                 indexLabels: '2017!H4:H8',
//                 data: '2017!I4:I8'
//             }
//         },
//     }
// })

const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

const chart = new Chart(ctx, {
    type: 'pie',
    plugins: [ChartDataSource],
    data: {
        datasets: [{
            type: 'pie',
            yAxisID: 'temperature',
            backgroundColor: [randomRGB(), randomRGB(), randomRGB(), randomRGB(), randomRGB()],
            tension: 0,
            fill: true
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 20,
            text: 'Daftar 5 Harga Kontrak Terbesar'
        },
        plugins: {
            datasource: {
                rowMapping: 'index',
                datasetLabels: "2017!I3",
                url: './Data_Gabungan.xlsx',
                indexLabels: '2017!H4:H8',
                data: '2017!I4:I8',
            }
        },
    }
})
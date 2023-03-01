const ctx = document.getElementById('grafico__02-2022');
      
new Chart(ctx, {
    type: 'line',
    data: {
        labels: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
        datasets: [
            {
                label: 'Horas de rendimento',
                data: [ , , , 58, 38, 55, 43, 46, 51, 56.5, 53, 57.5, 59.5, 64, 70.5, 64.5, 69.5, 65.5, 65.5, 43.5, 56.5, 55.5, 53.5, 65, 63.5, 30],
                borderWidth: 5,
                borderColor: 'rgba(0, 128, 0)',
            },
            {
                label: 'Equipe M',
                data: [ , , , 35, 23.5, 34, 25.5, 22.5, 25.5, 21, 26.5, 24, 24, 38, 42, 36, 40, 34.5, 37.5, 17, 24.4, 26.5, 22.5, 33.5, 25, 9],
                borderWidth: 5,
                borderColor: 'rgba(0, 0, 255)',
            },
            {
                label: 'Equipe C',
                data: [ , , , 23, 14.5, 21, 17.5, 23.5, 25.5, 35.5, 26.5, 28, 29, 25.5, 27.5, 28.5, 29.5, 31, 28, 26.5, 32, 29, 31, 31.5, 38.5, 21],
                borderWidth: 5,
                borderColor: 'rgba(255, 0, 0)',
            },
            {
                label: 'Equipe Suplente',
                data: [ , , , 0, 0, 0, 0, 0, 0, 0, 0, 5.5, 6.5, .5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                borderWidth: 5,
                borderColor: 'rgba(0, 0, 0)',
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
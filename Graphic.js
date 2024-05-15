document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        {name: "Товар 1", quantity: 2},
        {name: "Товар 2", quantity: 3},
        {name: "Товар 3", quantity: 4},
        {name: "Товар 4", quantity: 5},
        {name: "Товар 5", quantity: 6},
    ];

    const ctx = document.getElementById('popularityChart').getContext('2d');
    const labels = cartItems.map(item => item.name);
    const data = {
        labels: labels,
        datasets: [{
            label: 'Популярність товару',
            data: cartItems.map(item => item.quantity),
            backgroundColor: [
                'rgba(0, 0, 0, 1)',       // Black
                'rgba(255, 255, 255, 1)', // White
                'rgba(128, 128, 128, 1)', // Gray
                'rgba(255, 255, 0, 1)',   // Yellow
                'rgba(255, 165, 0, 1)'    // Orange
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',       // Black
                'rgba(0, 0, 0, 1)', // White
                'rgba(0, 0, 0, 1)', // Gray
                'rgba(0, 0, 0, 1)',   // Yellow
                'rgba(0, 0, 0, 1)'    // Orange
            ],
            borderWidth: 1
        }]
    };

    const popularityChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

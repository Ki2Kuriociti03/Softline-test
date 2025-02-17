import Chart from "chart.js/auto";


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("report-form") as HTMLFormElement;
    const resetBtn = document.getElementById("reset-btn") as HTMLButtonElement;
    const canvas = document.getElementById("chart") as HTMLCanvasElement;
    const chartContainer = document.querySelector(".chart-container") as HTMLDivElement;
    const ctx = canvas.getContext("2d");

    let chart: Chart | null = null;

    if (!ctx) {
        console.error("Не удалось получить контекст для графика");
        return;
    }

    canvas.width = 2000;
    canvas.height = 412;

    chartContainer.style.visibility = "hidden";

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault();
        renderChart();
    });

    resetBtn.addEventListener("click", () => {
        form.reset();
        if (chart) {
            chart.destroy();
            chart = null;
        }
        chartContainer.style.visibility = "hidden";
    });

    // Функция отрисовки графика
    function renderChart(): void {
        if (!canvas) {
            console.error("Canvas элемент не найден");
            return;
        }

        chartContainer.style.visibility = "visible";

        const data = {
            labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            datasets: [
                {
                    label: "График 1",
                    data: [10, 50, 40, 30, 50, 60, 70, 80, 60, 50, 90, 100],
                    borderColor: "red",
                    backgroundColor: "red",
                    fill: false,
                    tension: 0.4,
                    pointRadius: 0,
                },
                {
                    label: "График 2",
                    data: [20, 40, 30, 60, 70, 50, 90, 100, 80, 70, 60, 50],
                    borderColor: "blue",
                    backgroundColor: "blue",
                    fill: false,
                    tension: 0.4,
                    pointRadius: 0,
                },
                {
                    label: "График 3",
                    data: [5, 25, 35, 45, 55, 65, 75, 85, 95, 85, 75, 65],
                    borderColor: "green",
                    backgroundColor: "green",
                    fill: false,
                    tension: 0.4,
                    pointRadius: 0,
                }
            ]
        };

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(canvas, {
            type: "line",
            data: data,
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        align: "center",
                        position: "bottom",
                        labels: {
                            font: {
                                size: 16
                            },
                            color: "#000000",
                            padding: 42,
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: "#000000"
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#000000"
                        },
                    }
                }
            }
        });
    }
});

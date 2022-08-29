const data = [
    { date: '2020-02-25', count: 10 },
    { date: '2020-02-27', count: 2 },
    { date: '2020-03-02', count: 3 }
];

const startDate = new Date(data[0].date);
const endDate = new Date(data[data.length - 1].date);

for (
    let currentDate = startDate;
    startDate <= endDate;
    currentDate.setDate(currentDate.getDate() + 1)
) {
    const index = data.findIndex(o =>
        currentDate.getDate() == new Date(o.date).getDate() &&
        currentDate.getMonth() == new Date(o.date).getMonth() &&
        currentDate.getFullYear() == new Date(o.date).getFullYear()
    );
    let count = 0;
    if (index != -1) {
        count = data[index].count
    }
    console.log(currentDate, count);
}
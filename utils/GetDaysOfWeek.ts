export default function (schedule: boolean[]) {
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const selectedDays: string[] = [];

    schedule.forEach((val, idx) => {
        if (val) {
            selectedDays.push(daysOfWeek[idx]);
        }
    })

    return selectedDays;
}
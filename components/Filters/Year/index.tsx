import styles from './../filters.module.scss';

export default function Year() {
    const getYears = () => {
        let years = [],
            startYear = new Date().getFullYear();

        for (let i = startYear; i > startYear - 100; i--) {
            years.push(i);
        }

        return years;
    };

    return (
        <select className={styles.select}>
            <option>Year</option>
            {getYears().map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
}

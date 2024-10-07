import React, { useState } from 'react';
import calendar from './calendar.module.css';

function Calendar() {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const renderDays = () => {
        const daysInMonth = getDaysInMonth(currentYear, currentMonth);
        const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
        const daysArray = [];

        // Empty slots for the days before the first day of the current month
        for (let i = 0; i < firstDayOfMonth; i++) {
            daysArray.push(<div key={`empty-${i}`} className={calendar.emptyDay}></div>);
        }

        // Days of the current month
        for (let day = 1; day <= daysInMonth; day++) {
            const isToday = 
                day === today.getDate() && 
                currentMonth === today.getMonth() && 
                currentYear === today.getFullYear();
            
            daysArray.push(
                <div key={day} className={`${calendar.day} ${isToday ? calendar.today : ''}`}>
                    {day}
                </div>
            );
        }

        return daysArray;
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const getMonthName = (month) => {
        const date = new Date(currentYear, month);
        return date.toLocaleString('default', { month: 'long' });
    };

    return (
        <div className={calendar.calendar}>
            <div className={calendar.calendarHeader}>
                <button onClick={handlePrevMonth}>&lt;</button>
                <div>{getMonthName(currentMonth)} {currentYear}</div>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className={calendar.calendarBody}>
                <div className={calendar.dayNames}>
                    {daysInWeek.map((day, index) => (
                        <div key={index} className={calendar.dayName}>{day}</div>
                    ))}
                </div>
                <div className={calendar.daysGrid}>{renderDays()}</div>
            </div>
        </div>
    );
}

export default Calendar;

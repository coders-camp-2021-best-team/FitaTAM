import { PaginationItem, Typography, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import { convertDate } from '../../utils/convertDate';
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import { Dish, Footer } from '../../components';
import { getDay } from '../../mocks/dishesOfTheDay';

export const Feed = () => {
    let dupa = -8;
    const [dayOfWeek, setDayofWeek] = useState(new Date().getDay());
    const date = useMemo(() => new Date(), [new Date()]);
    date.setDate(date.getDate() - 4);
    const getFullWeek = () => {
        const week = [];
        while (week.length < 7) {
            week.push(new Date(date.setDate(date.getDate() + 1)));
        }
        return week;
    };
    const week = getFullWeek();
    const day = getDay(dayOfWeek);
    const dishes = Object.keys(day) as Array<keyof typeof day>;
    const goal = {
        kcal:
            parseInt(day.Breakfast.kcal) +
            parseInt(day.Dinner.kcal) +
            parseInt(day.Supper.kcal),
        prot:
            parseInt(day.Breakfast.B) +
            parseInt(day.Dinner.B) +
            parseInt(day.Supper.B),
        fat:
            parseInt(day.Breakfast.T) +
            parseInt(day.Dinner.T) +
            parseInt(day.Supper.T),
        carbs:
            parseInt(day.Breakfast.W) +
            parseInt(day.Dinner.W) +
            parseInt(day.Supper.W),
    };
    const PaginationDay = styled(PaginationItem)`
        background-color: unset !important;
    `;
    const DayOfWeek = styled(Typography)`
        height: fit-content;
        margin: 13px 0;
        text-align: center;
    `;
    const PaginationStyled = styled(Pagination)`
        width: 100%;
        height: 40px;
        .MuiPagination-ul {
            background-color: #4caf50;
            display: flex;
            justify-content: space-between;
        }
    `;
    const dayOfTheWeek = (day: number) => {
        switch (day) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wendsday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return 'Wrong day';
        }
    };
    return (
        <>
            <PaginationStyled
                hideNextButton={true}
                hidePrevButton={true}
                count={7}
                renderItem={(item) => {
                    ++dupa;
                    if (dupa === 7) {
                        dupa = -7;
                    }
                    return (
                        <PaginationDay
                            {...item}
                            page={convertDate(new Date(week[dupa]))}
                            size='large'
                            shape='rounded'
                        />
                    );
                }}
                onChange={(e, p) => {
                    setDayofWeek(week[p - 1].getDay());
                    console.log(e.target);
                }}
            />
            <DayOfWeek>{dayOfTheWeek(dayOfWeek)}</DayOfWeek>
            {dishes.map((dish) => (
                <Dish dish={day[dish]} name={dish} key={dish} />
            ))}
            <Footer eaten={goal} />
        </>
    );
};

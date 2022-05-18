import { PaginationItem, Typography, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import { convertDate } from '../../utils/convertDate';
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import { Dish } from '../../components';
import { getDay } from '../../mocks/dishesOfTheDay';
import { count } from 'console';

export const Feed = () => {
    let dupa = -8;
    const [page, setPage] = useState(new Date().getDay());
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
    const day = getDay(1);
    const dishes = Object.keys(day) as Array<keyof typeof day>;
    const DayPicker = styled(Box)`
        background-color: #4caf50;
        display: flex;
        justyfy-content: space-between;
    `;
    const PaginationDay = styled(PaginationItem)`
        flex-grow: 1;
        :hover: {
            background-color: rgba(0, 0, 0, 0.2);
        }
    `;
    const DayOfWeek = styled(Typography)`
        margin: 13px 0;
    `;
    const PaginationStyled = styled(Pagination)`
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
                return 'Wednsday';
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
    // const handleChange = (event) => {}
    return (
        <>
            <PaginationStyled
                hideNextButton={true}
                hidePrevButton={true}
                count={7}
                renderItem={() => {
                    ++dupa;
                    return (
                        <PaginationDay
                            page={convertDate(new Date(week[dupa]))}
                            size='large'
                            shape='rounded'
                        />
                    );
                }}
            />
            <DayOfWeek>{dayOfTheWeek(new Date().getDay())}</DayOfWeek>
            {dishes.map((dish) => (
                <Dish dish={day[dish]} name={dish} />
            ))}
        </>
    );
};

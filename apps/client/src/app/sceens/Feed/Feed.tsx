import { PaginationItem, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { convertDate } from "../../utils/convertDate";
import styled from '@emotion/styled';
import { useMemo } from "react";

export const Feed = () => {
  const date = useMemo(() => new Date(), [new Date()]);
  date.setDate(date.getDate() -4);
  const getFullWeek = () => {
    const week: Array<Date> = [];
    while(week.length < 7){
      week.push(new Date(date.setDate(date.getDate() + 1)));
    }
    return week;
  }
  const week = getFullWeek();
  const DayPicker = styled(Box)`
    background-color: #4caf50;
    display: flex;
    justyfy-content: space-between;
  `;
  const PaginationDay = styled(PaginationItem)`
    flex-grow: 1;
    :hover:{background-color: rgba(0, 0, 0, 0.2)}
  `;
  const dayOfTheWeek = (day: number) => {
    switch (day){
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
  }
  return (
    <>
      <DayPicker>
        {week.map((day) => <PaginationDay page={convertDate(day)} key={day.toString()} size='large' shape='rounded' />)}
      </DayPicker>
      <Typography sx={{my: '13px'}}>{dayOfTheWeek(new Date().getDay())}</Typography>
    </>
  )
}

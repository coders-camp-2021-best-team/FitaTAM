import { PaginationItem, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { convertDate } from "../../utils/convertDate";
import styled from '@emotion/styled';

export const Feed = () => {
  const date = new Date();
  date.setDate(date.getDate() -3)
  const StyledPagination = styled(Box)`
    background-color: succes.main
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
      <Box sx={{backgroundColor: '#4caf50', display: 'flex', justifyContent: 'space-between'}}>
        <PaginationItem page={convertDate(date)} size='large' shape='rounded' sx={{flexGrow: '1', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.2)'}}}/>
        <PaginationItem page={convertDate(new Date(date.setDate(date.getDate() + 1)))} size='large' shape='rounded' sx={{flexGrow: '1', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.2)'}}}/>
        <PaginationItem page={convertDate(new Date(date.setDate(date.getDate() + 1)))} size='large' shape='rounded' sx={{flexGrow: '1', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.2)'}}}/>
        <PaginationItem page={convertDate(new Date(date.setDate(date.getDate() + 1)))} size='large' shape='rounded' sx={{flexGrow: '1', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.2)'}}}/>
        <PaginationItem page={convertDate(new Date(date.setDate(date.getDate() + 1)))} size='large' shape='rounded' sx={{flexGrow: '1', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.2)'}}}/>
        <PaginationItem page={convertDate(new Date(date.setDate(date.getDate() + 1)))} size='large' shape='rounded' sx={{flexGrow: '1', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.2)'}}}/>
        <PaginationItem page={convertDate(new Date(date.setDate(date.getDate() + 1)))} size='large' shape='rounded' sx={{flexGrow: '1', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.2)'}}}/>
      </Box>
      <Typography sx={{my: '13px'}}>{dayOfTheWeek(date.getDay())}</Typography>
    </>
  )
}

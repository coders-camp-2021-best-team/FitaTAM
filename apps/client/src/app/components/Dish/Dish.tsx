import styled from '@emotion/styled';
import { Add, ExpandLess, ExpandMore } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { getDay } from '../../mocks/dishesOfTheDay';
import { dish, product } from '../../utils/types/dish.types';
import { Product } from '../Product';

type props = {
    name: string;
    dish: dish;
};

export const Dish = ({ dish, name }: props) => {
    const [seeMore, setSeeMore] = useState(false);
    const DishBox = styled(Box)`
        height: 70px;
        padding: 5px;
        width: 100%;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    const AddButton = styled(IconButton)`
        background-color: #4caf50;
        :hover: black;
        height: 40px;
    `;
    const Products = styled(Box)`
        display: flex;
        flex-direction: column;
        width: 100%;
    `;
    return (
        <>
            <DishBox>
                <Box>
                    <Typography variant='h6'>
                        {name}{' '}
                        {dish.kcal !== '0' ? (
                            <IconButton
                                onClick={() => setSeeMore((prev) => !prev)}
                            >
                                {!seeMore ? <ExpandMore /> : <ExpandLess />}
                            </IconButton>
                        ) : null}
                    </Typography>
                    <Typography sx={{ fontSize: '13px' }}>
                        {dish.kcal} kcal
                        {dish.kcal !== '0'
                            ? `B: ${dish.B}g T: ${dish.T}g W: ${dish.W}g`
                            : null}
                    </Typography>
                </Box>
                <AddButton>
                    <Add />
                </AddButton>
            </DishBox>
            {seeMore ? (
                <Products>
                    {dish.Products
                        ? dish.Products.map((product) => (
                              <Product product={product} />
                          ))
                        : null}
                </Products>
            ) : null}
        </>
    );
};

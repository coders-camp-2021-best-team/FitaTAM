import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import { Cancel, ConstructionOutlined } from "@mui/icons-material";
import { product } from "../../utils/types/dish.types";

type props = {
  product: product;
}

export const Product = ({product}: props) => {
  
  const handleDetele = () => console.log("deleting product") // TODO connect with API
  const ProductBox = styled(Box)`
    padding: 5px;
    width: 100%;
    background-color: #d8e3d8;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const DeteleButton = styled(IconButton)`
    padding: 0;
    margin-right: 7px;
  `;
  return (
    <ProductBox>
      <Box>
        <Typography variant='h6'>{product.name}</Typography>
        <Typography sx={{fontSize: '13px'}}>{product.kcal} kcal B: {product.B} T: {product.T} W: {product.W}</Typography>
      </Box>
      <DeteleButton onClick={handleDetele}>
        <Cancel />
      </DeteleButton>
    </ProductBox>
  )
}

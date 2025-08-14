import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import fallbackImage from "../assets/banner3.png";
import { useNavigate } from "react-router-dom";
import { useRestaurant } from "../pages/Restaurant";

function Product({ cart, setCart }) {
  const { product } = useRestaurant();
  const navigate = useNavigate();

  function AddtoCart(item) {
    const alreadyExist = cart.some((value) => {
      return value.itemID == item.itemID;
    });
    if (alreadyExist) {
      alert("Item already added to the cart");
    } else {
      setCart((val) => [...val, item]);
    }
  }

  return (
    <Box className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 p-5">
      {product.map((item, idx) => (
        <Card className=" flex flex-col  justify-between  p-2" key={idx}>
          <CardMedia
            component="img"
            alt="green iguana"
            className=" h-[156px] xl:h-[250px] lg:h-[204px] rounded-lg object-cover"
            sx={{}}
            image={item.imageUrl || fallbackImage}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
            onClick={() => {
              navigate(`/product/${item.itemID}`);
            }}
          />
          <CardContent className="flex justify-between">
            <Typography
              level="title-lg"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#5d4037" }}
            >
              {item.itemName}
            </Typography>
            <Typography
              level="title-lg"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#8d6e63" }}
            >
              ₹{item.itemPrice}
            </Typography>
          </CardContent>
          <CardActions className=" flex justify-center">
            <Button
              sx={{
                margin: "0",
                backgroundColor: "#6d4c41",
                color: "white",
                fontSize: "11px",
              }}
              onClick={() => {
                AddtoCart(item);
              }}
            >
              Add To Card
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default Product;

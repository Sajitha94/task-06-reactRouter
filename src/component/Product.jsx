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
import { Padding } from "@mui/icons-material";

function Product({ cart, setCart }) {
  const { product } = useRestaurant();
  const navigate = useNavigate();

  function AddtoCart(item) {
    const alreadyExist = cart.some((value) => {
      return value.itemID == item.itemID;
    });
    if (alreadyExist) {
      setCart((pre) =>
        pre.map((cartItem) =>
          cartItem.itemID == item.itemID
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((val) => [...val, { ...item, quantity: 1 }]);
    }
  }

  return (
    <Box className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 p-5">
      {product.map((item, idx) => (
        <Card className=" flex flex-col  justify-between  p-2 gap-3" key={idx}>
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
          <CardContent className="flex justify-between md:mx-2" style={{padding:0}}>
            <Typography
              level="title-lg"
              sx={{ fontSize: "13px", fontWeight: 600, color: "#5d4037" }}
            >
              {item.itemName}
            </Typography>
            <Typography
              level="title-lg"
              sx={{ fontSize: "13px", fontWeight: 600, color: "#8d6e63" }}
            >
              ₹{item.itemPrice}
            </Typography>
          </CardContent>
          <CardActions className=" flex justify-center" sx={{padding:"0"}}>
            {cart.some((cartItem) => cartItem.itemID == item.itemID) ? (
              <Box className="flex gap-2 items-center" > 
                <Button
                   sx={{ backgroundColor: "#6d4c41", minWidth: "10px",borderRadius:"50%",color:"white",paddingTop:"4px" }}
                  onClick={() => {
                    setCart((pre) =>
                      pre.map((cartItem) =>
                        cartItem.itemID == item.itemID
                          ? {
                              ...cartItem,
                              quantity: cartItem.quantity - 1,
                            }
                          : cartItem
                      ).filter((cartItem => cartItem.quantity > 0))
                    );
                  }}
                >
                  -
                </Button>
                <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
                  {
                    cart.find((cartItem )=> cartItem.itemID == item.itemID)
                      ?.quantity
                  }
                </Typography>
                <Button   sx={{ backgroundColor: "#6d4c41", minWidth: "10px",borderRadius:"50%",color:"white",paddingTop:"4px" }} onClick={()=>{
                    AddtoCart(item);
                  }}> + </Button>
              </Box>
            ) : (
              <>
               <Button
              sx={{
                margin: "0",
                backgroundColor: "#6d4c41",
                color: "white",
                fontSize: "11px",
                padding:"5px",
                 textTransform: "none"
              }}
              
              onClick={() => {
                AddtoCart(item);
              }}
            >
              Add To Card
            </Button>
              </>
            )}

            
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default Product;

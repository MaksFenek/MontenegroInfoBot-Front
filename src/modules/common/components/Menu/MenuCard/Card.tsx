import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export interface MenuCardProps {
  image: string;
  title: string;
  link: string;
}
//"https://mui.com/static/images/cards/contemplative-reptile.jpg"
export const MenuCard = ({ image, title, link }: MenuCardProps) => {
  return (
    <NavLink to={link}>
      <Card sx={{ cursor: "pointer" }}>
        <CardMedia component="img" height="100" image={image} />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
};

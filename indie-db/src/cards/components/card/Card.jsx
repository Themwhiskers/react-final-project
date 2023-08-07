import { CardActionArea } from "@mui/material";
import MuiCard from "@mui/material/Card";
import ROUTES from "../../../routes/routesModel";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import cardType from "../../models/types/cardType";


const Card = ({ card, onDelete, onLike }) => {

  const navigate = useNavigate(); 


  return (

    <MuiCard sx={{ minWidth: 280, maxWidth: 350 }}>
      <CardActionArea sx={{ p: 2 }}
        onClick={() => 
          navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card}></CardBody>
      </CardActionArea>
      <CardActionBar
        cardId={card._id}
        onDelete={onDelete}
        onLike={onLike}
        cardUserId={card.user_id}
        cardLikes={card.likes}
      />
    </MuiCard>
  );
};

Card.propTypes = {
  card: cardType.isRequired,
  onDelete: func.isRequired,
  onLike: func.isRequired,
}

export default Card;

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";
import ROUTES from "../../routes/ROUTES";
import { Navigate } from "react-router-dom";

const initialDataFromServer = [
  {
    id: "sdlfkjgn0",
    title: "title1",
    subtitle: "subtitle1",
    body: "body1",
    img: "/assets/imgs/car1.jpg",
  },
  {
    id: "sdlfkjgn1",
    title: "title2",
    subtitle: "subtitle2",
    body: "body2",
    img: "/assets/imgs/car2.jpeg",
  },
  {
    id: "sdlfkjgn2",
    title: "title3",
    subtitle: "subtitle3",
    body: "body3",
    img: "/assets/imgs/car3.jpeg",
  },
  {
    id: "sdlfkjgn3",
    title: "title4",
    subtitle: "subtitle4",
    body: "body4",
    img: "/assets/imgs/car4.jpeg",
  },
  {
    id: "sdlfkjgn4",
    title: "title5",
    subtitle: "subtitle5",
    body: "body5",
    img: "/assets/imgs/car5.jpeg",
  },
];

// const initialDataFromServer = [];

const handleDeleteCard = (id) => {
  console.log("father: card to delete", id);
};

const handleEditingCard = (id) => {
  console.log("father:card to edit", id);
  Navigate(`${ROUTES.EDITCARD}/${id}`);
};
const handlePhoneCard = (id) => {
  console.log("father:card to call", id);
};
const handleLikeCard = (id) => {
  console.log("father card to like", id);
};

const HomePage = () => {
  if (!initialDataFromServer || !initialDataFromServer.length) {
    return <Typography>Could not find any items</Typography>;
  }
  return (
    <Grid container spacing={2}>
      {initialDataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <CardComponent
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.img}
            phone="0500000000"
            address={{
              city: "South park",
              street: "Hogwarts",
              houseNumber: 123,
              zipCode: 12345,
            }}
            cardNumber={12345}
            onDelete={handleDeleteCard}
            onEditing={handleEditingCard}
            onPhone={handlePhoneCard}
            onLike={handleLikeCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;

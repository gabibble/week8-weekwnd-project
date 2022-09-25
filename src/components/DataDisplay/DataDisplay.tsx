import React, { useState } from "react";
//card grid
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//after connecting api, custom hook, and redux store, display data
import { useGetData } from "../../custom-hooks";
import { serverCalls } from "../../api"; // ADD THIS
import { UpdateTrip } from "../UpdateTrip";
import { DeleteDialog } from "../DeleteDialog";

//add data

//plantform

//placeholder data
const trips = [
  {
    accommodation: "Air bnb",
    city: "Santafe",
    country: "USA",
    id: "xqKb47O8b-7cndp_KYvB4DPBlGM6o2vAXCwfgxg707M",
    people: "2",
    state: "New Mexico",
    trip_date: "2022/12/08",
    trip_length: "5",
    trip_name: "Winter Trip",
  },
  {
    accommodation: "hotel",
    city: "Todos Santos",
    country: "Mexico",
    id: "JsBbyZNRiftynwnMlUqX8Jk736VOZ0Zu1ayhDVQFPgE",
    people: "4",
    state: "Baja California",
    trip_date: "2023/04/18",
    trip_length: "4",
    trip_name: "Bachelorette Party",
  },
  {
    accommodation: "hotel",
    city: "Todos Santos",
    country: "Mexico",
    id: "ucGthGe-Gw11UsWNVpeDFlTlGxrEN0DWQXT99R9vdeM",
    people: "4",
    state: "Baja California",
    trip_date: "2023/04/18",
    trip_length: "7",
    trip_name: "Bachelorette Party3",
  },
];
//generate random placeholder photo
let photoURL = "https://source.unsplash.com/random?img=6";

export const DataDisplay = () => {
  let { tripData, getData } = useGetData();
//   let [activeId, setActiveId] = useState("");
//   let [activePlant, setActivePlant] = useState({});

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* <ViewPlant id={activeId} data={activePlant} /> */}

        <h2>Your Trips</h2>
        <br />
        <Grid container spacing={4}>
          {/* replace placeholder data once connected to api*/}
          {tripData.map((trip: any, index: any) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "380px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    pt: "0",
                    height: "150px",
                  }}
                  image={`https://source.unsplash.com/random?${trip.trip_name}`}
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {trip.trip_name}
                  </Typography>
                  <Typography gutterBottom sx={{ fontSize: "16px" }}>
                    {trip.city}, {trip.state}, {trip.country}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "11px" }}>
                    {trip.trip_length} nights
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "11px" }}>
                    {trip.people} people
                  </Typography>
                </CardContent>
                {/* card actions here */}
                <CardActions>
                  <UpdateTrip id={trip.id} name={trip.trip_name} data={trip} />
                  <DeleteDialog id={trip.id} name={trip.trip_name} />
                  {/* add "view trip" component to view data
                  <Button onClick={(event) => activateID(card.id, card)}>
                    View
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

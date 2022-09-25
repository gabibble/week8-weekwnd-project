import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import {
  chooseName,
  chooseCity,
  chooseState,
  chooseCountry,
  chooseAccomm,
  choosePeople,
  chooseDate,
  chooseLength,
} from "../../redux/slices/rootSlice";
import { Input } from "../sharedComponents/Input";

import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks";
import { prototype } from "events";

interface FormProps {
  id?: string;
  data?: {};
  updateData?: any;
}

interface PlantState {
  trip_name: string;
  city: string;
  state: string;
  country: string;
  accommodation: string;
  people: string;
  trip_date: string;
  trip_length: string;
}

export const TripForm = (props: FormProps) => {
  const dispatch = useDispatch();
  let { tripData, getData } = useGetData();
  const store = useStore();
  const trip_name = useSelector<PlantState>((state) => state.trip_name);
  const city = useSelector<PlantState>((state) => state.city);
  const state = useSelector<PlantState>((state) => state.state);
  const country = useSelector<PlantState>((state) => state.country);
  const accommodation = useSelector<PlantState>((state) => state.accommodation);
  const trip_date = useSelector<PlantState>((state) => state.trip_date);
  const trip_length = useSelector<PlantState>((state) => state.trip_length);

  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data: any, event: any) => {
    console.log(props.id);

    if (props.id!) {
      await serverCalls.update(props.id!, data);
      console.log(`Updated: ${data} ${props.id}`);
      window.location.reload();
      event.target.reset();
    } else {
      dispatch(chooseName(data.trip_name));
      dispatch(chooseCity(data.city));
      dispatch(chooseState(data.state));
      dispatch(chooseCountry(data.country));
      dispatch(chooseAccomm(data.accommodation));
      dispatch(choosePeople(data.people));
      dispatch(chooseDate(data.trip_date));
      dispatch(chooseLength(data.trip_length));

      await serverCalls.create(store.getState());
      window.location.reload();
      event.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <label htmlFor="trip_name">Trip Name</label>
            <Input
              {...register("trip_name")}
              name="trip_name"
              placeholder="Trip Name (e.g. girls trip)"
              type="text"
              // defaultValue={props.updateData.trip_name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="city">City</label>
            <Input
              {...register("city")}
              name="city"
              placeholder="city"
              type="text"
              // defaultValue={props.updateData.city}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="state">State</label>
            <Input
              {...register("state")}
              name="state"
              placeholder="state"
              type="text"
              // defaultValue={props.updateData.state}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="country">country</label>
            <Input
              {...register("country")}
              name="country"
              placeholder="country"
              type="text"
              // defaultValue={props.updateData.country}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="accommodation">Accommodation</label>
            <Input
              {...register("accommodation")}
              name="accommodation"
              placeholder="accommodation"
              type="text"
              // defaultValue={props.updateData.accommodation}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <label htmlFor="people">Number of People</label>
            <Input
              {...register("people")}
              name="people"
              placeholder="people"
              type="text"
              // defaultValue={props.updateData.people}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <label htmlFor="trip_date">Trip Date</label>
            <Input
              {...register("trip_date")}
              name="trip_date"
              placeholder="date"
              type="text"
              // defaultValue={props.updateData.trip_date}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <label htmlFor="trip_length">How many nights?</label>
            <Input
              {...register("trip_length")}
              name="trip_length"
              placeholder="Trip Lenth"
              type="number"
              // defaultValue={props.updateData.trip_length}
            />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

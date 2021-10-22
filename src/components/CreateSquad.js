import React, { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import User from "./User";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ControlledInput from "./ControlledInput";
import SquadMember from "./SquadMember";
import { LoginContext } from "../context/LoginContext";
import { useHistory } from "react-router";
import axios from "axios";

const dummyfriends = [
  { bio: "about me", games: ["Madden"], username: "Jaya" },
  { bio: "about me", games: ["Fortnight"], username: "Jess" },
  { bio: "about me", games: ["Apex"], username: "Rachael" },
  { bio: "about me", games: ["COD"], username: "David" },
];

const schema = yup.object().shape({
  name: yup.string().required("You need a name"),
  squadmates: yup.array().required("You must select some friends!"),
});

function CreateSquad() {
  const [friends, setFriends] = useState([]);
  const loginContext = useContext(LoginContext);
  const history = useHistory();
  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", squadmates: "" },
  });

  async function onSubmit(data) {
    console.log(data);
    const config = {
      method: "post",
      url: `https://squadfinderapp.herokuapp.com/squads`,
      headers: { authorization: `Bearer ${loginContext.user.token}` },
      data: data,
    };

    let response = await axios(config);
    history.push("/squad");
  }

  useEffect(() => {
    async function getFriends() {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/friends`,
        headers: { authorization: `Bearer ${loginContext.user.token}` },
      };
      let results = await axios(config);
      console.log(results.data);
      setFriends(results.data);
    }
    getFriends();
  }, []);

  return (
    <div>
      <Form className="create-squad" onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          title="Step 1: Enter a Squad Name."
          name="name"
          control={control}
          errors={errors}
          type="input"
        />
          <h4>Step 2: Click on your friends below to add them to your squad.</h4>
          <Button type="submit">Create Squad!</Button>
        <div className="squad-mates">
          {friends.map((friend) => (
            <div
            onClick={() => {
              setValue("squadmates", [
                ...watch("squadmates"),
                friend.username,
              ]);
            }}
            >
              <SquadMember >
                <User profile={friend} />
              </SquadMember>
            </div>
          ))}
        </div>

      </Form>
    </div>
  );
}

export default CreateSquad;

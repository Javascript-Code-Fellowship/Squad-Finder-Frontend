import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button, Image } from 'react-bootstrap';
import * as yup from 'yup';
import ControlledInput from '../components/ControlledInput';
import axios from 'axios';
import gamelist from '../assets/gamelist';
import { LoginContext } from '../context/LoginContext';
import { useHistory } from 'react-router';

const schema = yup.object().shape({
  bio: yup.string().required('You need a bio'),
  game: yup.string().required('You must select a game!'),
});

function ProfileCreate() {
  const loginContext = useContext(LoginContext);
  const history = useHistory();
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    defaultValues: { bio: '', game: '' },
  });

  async function onSubmit(data) {
    console.log(data);
    const config = {
      method: 'post',
      url: `https://squadfinderapp.herokuapp.com/profile`,
      headers: { authorization: `Bearer ${loginContext.user.token}` },
      data: data,
    };

    let response = await axios(config);
    console.log(response);
    console.log(loginContext);
    history.push(`/profile/${loginContext.user.user.id}`);
  }

  return (
    <div className="profile-create">
      <h1>Create Your Profile</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          title="Bio"
          control={control}
          errors={errors}
          name="bio"
          as="textarea"
        />
        <h4>Favorite Game</h4>
        <div className="profile-games">
          {gamelist.map((game) => (
            <Image
              onClick={() => {
                setValue('game', game.name);
              }}
              src={game.image}
            />
          ))}
        </div>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProfileCreate;

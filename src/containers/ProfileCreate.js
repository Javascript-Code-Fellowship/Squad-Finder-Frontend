import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button, Image } from 'react-bootstrap';
import * as yup from 'yup';
import ControlledInput from '../components/ControlledInput';
import axios from 'axios';
import gamelist from '../assets/gamelist';

const schema = yup.object().shape({
  bio: yup.string().required('You need a bio'),
  game: yup.string().required('You must select a game!'),
});

function ProfileCreate() {
  console.log(gamelist);

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

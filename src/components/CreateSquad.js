import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import User from './User';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ControlledInput from './ControlledInput';
import SquadMember from './SquadMember';
import { LoginContext } from '../context/LoginContext';
import { useHistory } from 'react-router';
import axios from 'axios';

const friends = [
  { bio: 'about me', games: ['Madden'], username: 'Jaya' },
  { bio: 'about me', games: ['Fortnight'], username: 'Jess' },
  { bio: 'about me', games: ['Apex'], username: 'Rachael' },
  { bio: 'about me', games: ['COD'], username: 'David' },
];

const schema = yup.object().shape({
  name: yup.string().required('You need a name'),
  squadmates: yup.array().required('You must select some friends!'),
});

function CreateSquad() {
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
    mode: 'onTouched',
    defaultValues: { name: '', squadmates: '' },
  });

  async function onSubmit(data) {
    console.log(data);
    const config = {
      method: 'post',
      url: `https://squadfinderapp.herokuapp.com/squads`,
      headers: { authorization: `Bearer ${loginContext.user.token}` },
      data: data,
    };

    let response = await axios(config);
    console.log(response);
    history.push('/squads');
  }

  return (
    <div>
      <Form className="create-squad" onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          title="Squad Name"
          name="name"
          control={control}
          errors={errors}
          type="input"
        />
        <h4>Select Members</h4>
        <div className="squad-mates">
          {friends.map((friend) => (
            <div
              onClick={() => {
                setValue('squadmates', [
                  ...watch('squadmates'),
                  friend.username,
                ]);
              }}
            >
              <SquadMember>
                <User profile={friend} />
              </SquadMember>
            </div>
          ))}
        </div>

        <Button type="submit">Create Squad!</Button>
      </Form>
    </div>
  );
}

export default CreateSquad;

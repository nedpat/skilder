import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: 'Name is required' },
  };

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState(0);
  const [description, setDescription] = useState('');
  const [savedSkills, setSavedSkills] = useState([]);

  const handleImage = (event) => {
    setImage(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleSkill = (event) => {
    setSkill(event.target.value);
  };
  const handleLevel = (event) => {
    setLevel(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  // API endpoint for saving a profile is /api/profiles,
  // form data in the format of { image, name, description, skills }

  const onFormSubmit = (data) => {
    console.log(data);

    const payload = {
      image: data.image[0],
      name: data.name,
      description: data.description,
      skills: savedSkills,
    };

    axios
      .post('/api/profiles', payload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onErrors = (errors) => console.error(errors);

  const convertLevel = (currentLevel) => {
    switch (currentLevel) {
      case '0':
        return 1;
      case '25':
        return 2;
      case '50':
        return 3;
      case '75':
        return 4;
      case '100':
        return 5;
      default:
        return 1;
    }
  };

  const handleAddSkill = () => {
    const newSkill = { skill, level: convertLevel(level) };
    setSavedSkills([...savedSkills, newSkill]);
    setSkill('');
    setLevel(0);
  };

  return (
    <div className='px-4'>
      {/* <form onSubmit={handleSubmit(onFormSubmit, handleError)}> */}
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <h1 className='text-2xl uppercase'>info</h1>
        <label className='text-gray-400 block my-4' htmlFor=''>
          Upload Image
        </label>
        <input
          name='image'
          type='file'
          className='file-input file-input-bordered w-full max-w-xs block my-4'
          {...register('image', registerOptions.image)}
        />
        <input
          name='name'
          type='text'
          placeholder='Full name'
          className='input input-bordered w-full max-w-xs block my-4'
          {...register('name', registerOptions.name)}
        />
        <p class='text-red-600'>{errors?.name && errors.name.message}</p>

        <label className='text-gray-400 block my-4' htmlFor=''>
          Personal description
        </label>
        <textarea
          name='description'
          className='textarea textarea-bordered block my-4 h-40 w-2/3'
          {...register('description')}

          //   value={description}
          //   onChange={handleDescription}
        ></textarea>

        <hr class='my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50' />

        <h1 className='text-2xl uppercase'>Skills</h1>

        <select
          name='skill'
          className='select select-bordered w-full max-w-xs block my-4'
          {...register('skill')}
          value={skill}
          onChange={handleSkill}
        >
          <option disabled selected>
            Choose skill
          </option>
          <option>Choose skill</option>
          <option>CSS</option>
          <option>Javascript</option>
        </select>
        <div>
          <label className='text-gray-400 block my-4' htmlFor=''>
            Experience level 1-5
          </label>
          <input
            name='level'
            type='range'
            min='0'
            max='100'
            className='range range-primary'
            step='25'
            {...register('level')}
            value={level}
            onChange={handleLevel}
          />
          <div className='w-full flex justify-between text-xs px-2 my-4'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
        <div>
          <textarea
            name='skillSaved'
            className='textarea textarea-ghost p-0'
            placeholder='No skills saved yet'
            value={savedSkills.map((skill) => `${skill.skill} (${skill.level})`).join('\n')}
          ></textarea>
        </div>
        <button name='addSkill' className='btn btn-primary block my-4' onClick={handleAddSkill}>
          Add skill
        </button>

        <hr class='my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50' />

        <button name='saveProfile' type='submit' className='btn block my-4 float-right'>
          Save profile
        </button>
      </form>
    </div>
  );
};

export default Form;

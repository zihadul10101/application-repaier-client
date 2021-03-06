import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

import Sidebar from '../Sidebar/Sidebar';

const Reviews = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imgUrl, setImgUrl] = useState(null);
    const onSubmit = data => {
      console.log(data)
      const reviewData = {
        name: data.name,
        imgUrl: imgUrl,
        email: data.email,
        description: data.description
      };
      const url = `https://guarded-shelf-32601.herokuapp.com/addReview`;
  
      console.log(reviewData);
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      })
        .then(res => res.json())
        .then(data => console.log(data))
  
    };

    const handleImageUpload = (event) => {
      console.log(event.target.files);
      const imageData = new FormData();
      imageData.set('key', '169c06cd08fc190c1c2dee2a05effaf1')
      imageData.append('image', event.target.files[0])
  
      axios.post('https://api.imgbb.com/1/upload',
        imageData)
        .then(function (response) {
          // console.log(response.data.data.delete_url);
          setImgUrl(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  
    return (
        <section className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", textAlign: "center" }}>
          <h5 className="text-brand">Your Feedback</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
          Image:
          <input name="image" type="file"  onChange={handleImageUpload} />
          {errors.image && <span>This field is required</span>}
            <br />
            <br />
            Name:
            <input  {...register("name", { required: true })} value={loggedInUser.name} />
            {errors.name && <span>This field is required</span>}
            <br />
            <br />
            Email:
            <input {...register("email", { required: true })} value= {loggedInUser.email} />
            {errors.email && <span>This field is required</span>}
            <br />
            <br />
            Description:
            <input {...register("description", { required: true })} />
            {errors.description && <span>This field is required</span>}
            <input type="submit" />
          </form>
  
        </div>
      </section>
    );
};

export default Reviews;
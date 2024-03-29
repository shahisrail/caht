/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const PayDataFrom = ({ course, id }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    data.productId = id;
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(res=>res.json())
    .then(result=>{
        window.location.replace(result.url)
        console.log(result);
    })
    const servayIteam = {
      Name: data.Name,
      Subject: data.Subject,
    };
  };
  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("Name", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                {...register("Subject", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <button type="submit" className="btn mt-5">
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default PayDataFrom;

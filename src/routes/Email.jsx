import React from "react";
import Layout from "../components/Layout";
import Layout7 from "../components/Layout7";
import { useForm } from "react-hook-form";

export default function Email() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (formData) => console.log(formData);
  return (
    <Layout>
      <Layout7>
        <div className="py-16">
          <h2>Email me</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-8"
          >
            <div className="flex flex-col space-y-2">
              <input
                {...register("name", {
                  required: "이름을 반드시 입력해주세요.",
                  minLength: {
                    value: 2,
                    message: "2글자 이상 작성해주세요.",
                  },
                  maxLength: {
                    value: 5,
                    message: "5글자 이상 작성할 수 없습니다.",
                  },
                })}
                className=" px-4 py-4 border"
                type="text"
                placeholder="name"
              />
              {errors?.name && (
                <span className="text-red-600 text-sm px-4">
                  {errors?.name?.message}
                </span>
              )}
            </div>
            <div className="flex flex-cols space-y-2">
              <input
                {...register("email", {
                  required: "이메일은 필수 입력사항입니다.",
                })}
                className=" px-4 py-4 border"
                type="text"
                placeholder="email"
              />
              {errors?.email && (
                <span className="text-red-600 text-sm px-4">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <input
              {...register("message")}
              className=" px-2 py-4 border"
              type="text"
              placeholder="message"
            />
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              text="submit"
            >
              SEND
            </button>
          </form>
        </div>
      </Layout7>
    </Layout>
  );
}

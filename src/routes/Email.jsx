import React from "react";
import Layout from "../components/Layout";
import Layout7 from "../components/Layout7";
import { useForm } from "react-hook-form";
import { apiPostMail } from "../api";
import { useMutation } from "react-query";

export default function Email() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const { mutate, isLoading, data } = useMutation(apiPostMail, {
    onSuccess: () => {
      console.log(data);
      if (data.result === "success") {
        reset();
      }
    },
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };
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
            <div className="flex flex-col space-y-2">
              <input
                {...register("email", {
                  required: "이메일은 필수 입력사항입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "이메일 형식으로 입력해 주세요!",
                  },
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
            <div className="flex flex-col space-y-2">
              <input
                {...register("message", {
                  required: true,
                  minLength: {
                    value: 5,
                    message: "메시지 입력은 5글자 이상이어야 합니다.",
                  },
                })}
                className=" px-2 py-4 border"
                type="text"
                placeholder="message"
              />
              {errors?.message && (
                <span className="text-red-600 text-sm px-4">
                  {errors?.message?.message}
                </span>
              )}
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? "전송중..." : "전송"}
            </button>
          </form>
        </div>
      </Layout7>
    </Layout>
  );
}

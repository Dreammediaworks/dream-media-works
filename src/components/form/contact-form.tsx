"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";

type FormData = {
  name: string;
  email: string;
  phone: string;
  brandName: string;
  category: string;
};

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().email().required().label("Email"),
  phone: yup.string().required().label("Phone no"),
  brandName: yup.string().required().label("Brand Name"),
  category: yup.string().required().label("Category"),
});

// prop type
type IProps = {
  btnCls?: string;
};
export default function ContactForm({ btnCls = "" }: IProps) {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    setSubmitStatus(null);

    if (!formspreeEndpoint) {
      setSubmitStatus({
        type: "error",
        message:
          "Formspree endpoint is missing. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to .env.local.",
      });
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _replyto: data.email,
          _subject: "New enquiry from Dream Media Works contact form",
        }),
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you. Your details have been sent successfully.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, your message could not be sent. Please try again or email us directly.",
      });
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>Name</label>
        <input
          id="name"
          {...register("name")}
          type="text"
          placeholder="Vijay Kumar"
        />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Email</label>
        <input
          id="email"
          {...register("email")}
          type="email"
          placeholder="Your@email.com"
        />
        <ErrorMsg msg={errors.email?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Phone no</label>
        <input
          id="phone"
          {...register("phone")}
          type="tel"
          placeholder="+91 9876543210"
        />
        <ErrorMsg msg={errors.phone?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>Brand Name</label>
        <input
          id="brandName"
          {...register("brandName")}
          type="text"
          placeholder="Your Brand Name"
        />
        <ErrorMsg msg={errors.brandName?.message!} />
      </div>
      <div className="cn-contactform-input cn-contactform-select mb-25">
        <label>Category</label>
        <select id="category" {...register("category")} defaultValue="">
          <option value="" disabled>
            Select Category
          </option>
          <option value="clothing">Clothing</option>
          <option value="tech">Tech</option>
          <option value="food-beverage">Food & Beverage</option>
          <option value="beauty">Beauty</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="other">Other</option>
        </select>
        <ErrorMsg msg={errors.category?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button
          className={`tp-btn-black-md ${btnCls} w-100`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
      {submitStatus && (
        <p
          className={`cn-contactform-status ${
            submitStatus.type === "success" ? "is-success" : "is-error"
          }`}
        >
          {submitStatus.message}
        </p>
      )}
    </form>
  );
}

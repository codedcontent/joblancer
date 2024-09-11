"use client";

import { useNotification } from "@/contexts/NotificationProvider";
import CustomButton from "@/components/customButton/CustomButton";
import TextField from "@/components/textField/TextField";
import axiosInstance from "@/lib/axiosInstance";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { notify } = useNotification();

  // Handle change for any form field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate a single field
  const validateField = () => {
    // Check email
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    // Check password
    if (formData.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters long.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
    }

    // Check first name
    if (!formData.firstName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "This field is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "",
      }));
    }

    // Check last name
    if (!formData.lastName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "This field is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate input
    validateField();

    if (!errors.email && !errors.password) {
      setLoading(true);

      // Sign up the user
      try {
        const resp = await axiosInstance.post("/auth/signup", formData);
        notify(resp.data.msg, "success");
        router.push("/");
      } catch (error: any) {
        notify(error.response.data.error, "error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <TextField
        onChange={handleChange}
        placeholder="Enter your first name"
        title="First name"
        type="firstName"
        value={formData.firstName}
        error={errors.firstName}
        required
        name="firstName"
      />

      <TextField
        onChange={handleChange}
        placeholder="Enter your last name"
        title="Last name"
        type="lastName"
        value={formData.lastName}
        error={errors.lastName}
        required
        name="lastName"
      />

      <TextField
        onChange={handleChange}
        placeholder="Enter your email"
        title="Email"
        type="email"
        value={formData.email}
        error={errors.email}
        required
        name="email"
      />

      <TextField
        onChange={handleChange}
        placeholder="Create a password"
        title="Password"
        type="password"
        value={formData.password}
        error={errors.password}
        required
        name="password"
      />

      <CustomButton title="Create account" type="submit" loading={loading} />
    </form>
  );
};

export default SignupForm;

"use client";

import CustomButton from "@/components/customButton/CustomButton";
import TextField from "@/components/textField/TextField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNotification } from "@/app/contexts/NotificationProvider";
import axiosInstance from "@/lib/axiosInstance";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "ogescoc@gmail.com",
    password: "password",
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
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate input
    validateField();

    if (!errors.email && !errors.password) {
      setLoading(true);

      // Login the user
      try {
        const resp = await axiosInstance.post("/auth/login", formData);

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

      <CustomButton title="Login" type="submit" loading={loading} />
    </form>
  );
};

export default LoginForm;

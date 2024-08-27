"use client";

import { useNotification } from "@/app/contexts/NotificationProvider";
import CustomButton from "@/components/customButton/CustomButton";
import TextField from "@/components/textField/TextField";
import { useState } from "react";

type FormData = {
  password: string;
};

const ResetPasswordForm = () => {
  const { notify } = useNotification();

  const [formData, setFormData] = useState<FormData>({
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate input
    validateField();

    if (!errors.password) {
      setLoading(true);

      // TODO: Add form submission logic here
      if (true) {
        notify("Successful", "success");
      } else {
        notify("Message", "error");
      }
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <CustomButton title="Reset password" type="submit" loading={loading} />
    </form>
  );
};

export default ResetPasswordForm;

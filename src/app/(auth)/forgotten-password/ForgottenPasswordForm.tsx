"use client";

import CustomButton from "@/components/customButton/CustomButton";
import TextField from "@/components/textField/TextField";
import { useState } from "react";

type FormData = {
  email: string;
};

type Props = {
  confirmResetLink: () => boolean;
};

const ForgottenPasswordForm = ({ confirmResetLink }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
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
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate input
    validateField();

    if (!errors.email) {
      setLoading(true);

      // TODO: Add form submission logic here
      const resetLinkSent = confirmResetLink();

      if (resetLinkSent) setLoading(false);
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

      <CustomButton title="Get reset link" type="submit" loading={loading} />
    </form>
  );
};

export default ForgottenPasswordForm;

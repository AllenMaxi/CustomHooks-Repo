import { useState } from 'react';

// Custom hook to manage form state and validation
const useForm = (initialValues, validate) => {
  // State to store form values
  const [values, setValues] = useState(initialValues);
  // State to store form errors
  const [errors, setErrors] = useState({});
  // State to indicate if the form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding form value
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form values
    setErrors(validate(values));
    // Set submitting state to true
    setIsSubmitting(true);
  };

  // Handle input blur (when the input loses focus)
  const handleBlur = (e) => {
    const { name } = e.target;
    // Validate the form values
    setErrors(validate(values));
  };

  // Return form values, errors, and handlers
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useForm;



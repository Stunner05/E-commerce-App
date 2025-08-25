'use server';
import { Redirect } from "next";

export async function OrderForm(formData: FormData) {
  const FormData  = {
    fullName: formData.get('fullName'),
    address: formData.get('address'),
    city: formData.get('city'),
    email: formData.get('email'),
    cardNumber: formData.get('cardNumber'),
  };
}

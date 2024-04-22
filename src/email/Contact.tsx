import { Html } from "@react-email/html";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html lang="en">
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Message: {message}</div>
    </Html>
  );
}

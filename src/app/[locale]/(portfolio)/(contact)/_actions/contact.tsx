"use server";

import { SES } from "@aws-sdk/client-ses";
import { render } from "@react-email/render";
import ContactEmail from "@/email/Contact";
import { contactFormSchema } from "../types";

export async function sendContactEmail(prevState: unknown, formData: FormData) {
  const result = contactFormSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!result.success)
    return { sucess: false, error: result.error.formErrors.fieldErrors };

  console.log("credentials", {
    region: process.env.AMAZON_SES_REGION,
    credentials: {
      accessKeyId: process.env.AMAZON_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY as string,
    },
  });

  const ses = new SES({
    region: process.env.AMAZON_SES_REGION,
    credentials: {
      accessKeyId: process.env.AMAZON_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY as string,
    },
  });

  const emailHtml = render(
    <ContactEmail
      name={result.data.name}
      email={result.data.email}
      message={result.data.message}
    />,
  );

  const params = {
    Source: process.env.SENDER_EMAIL,
    Destination: {
      ToAddresses: [process.env.DESTINATION_EMAIL as string],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Message from portfolio contact form",
      },
    },
  };

  console.log("sending email");

  try {
    ses.sendEmail(params);
  } catch (error) {
    console.log(error);
  }

  return { sucess: true, error: null };
}

import ContactForm from "@/components/contact/ContactForm";
import Head from "next/head";
import React, { Fragment } from "react";
const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me a message" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;

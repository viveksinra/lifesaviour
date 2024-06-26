import React from "react";
import Navbar from "../../components/Layout/Navbar";
import PageHeader from "../../components/Common/PageHeader";
import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle="संपर्क करें"
        breadcrumbTextOne="मुख्य पृष्ठ"
        breadcrumbUrl="/"
        breadcrumbTextTwo="संपर्क करें"
      />

      <ContactForm />

      <ContactInfo />

      <Footer />
    </>
  );
}

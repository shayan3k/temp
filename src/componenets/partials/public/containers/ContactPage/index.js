import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import ContactWrapper from "../../components/ContactWrapper";

import "../../../../../assets/public/css/style.scss";

export default function ContactPage() {
  const breadItemsArray = [
    { title: "تماس با ما", link: "/contact" },
    { title: "صفحه اصلی", link: "/" },
  ];
  return (
    <div className="girls-page">
      <Header />
      <div className="pages-main">
        <PageTitle
          pageImage={"bg_contact.png"}
          breadItemsArray={breadItemsArray}
          pageTitle="تماس با ما"
          imageUrl={
            process.env.REACT_APP_IMAGE_URL +
            "/" +
            process.env.REACT_APP_ADMIN_WEBCONTROL_IMAGE_PATH
          }
        />

        <ContactWrapper />
      </div>
      <Footer />
    </div>
  );
}

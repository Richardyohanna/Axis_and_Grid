// Contact.tsx
import ContactForm from "../sections/contact/ContactForm/ContactForm";
import ContactInformation from "../sections/contact/ContactInformation/ContactInformation";

const Contact = () => {
  return (
    <>
      <section className="relative bg-white py-28 pb-20 text-black md:py-42">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.4fr_.6fr] lg:gap-16">
          <ContactForm />
          <ContactInformation />
        </div>
      </section>
    </>
  );
};

export default Contact;
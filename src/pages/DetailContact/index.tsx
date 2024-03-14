import React from "react";
import { useContactDetails } from "../../services/contact/index";

const ContactCard = ({ contactId }: { contactId: string }) => {
  const { contactDetails, fetchContactDetails } = useContactDetails();

  const handleClick = () => {
    fetchContactDetails(contactId);
  };

  return (
    <div>
      <h2>Contact Card</h2>
      <button onClick={handleClick}>Get Details</button>
      {contactDetails && (
        <div>
          <p>Name: {contactDetails.name}</p>
          <p>Email: {contactDetails.email}</p>
        </div>
      )}
    </div>
  );
};

export default ContactCard;

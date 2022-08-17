import { ContactItem } from "./ContactItem";
import { SearchBox } from "./SearchBox";
import { useSelector } from "react-redux/es/exports";

export const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  );
};

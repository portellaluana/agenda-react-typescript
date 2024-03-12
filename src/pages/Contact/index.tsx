import { Button, Title } from "../../components";
import { CardContact } from "../../components/CardContact";
import { PATHS } from "../../routes/paths";
import { useContact } from "./useContact";
import S from "./style.module.css";

const Contact = () => {
  const { contacts } = useContact();

  return (
    <>
      <div className={S.containerCards}>
        <Title>
          Contatos{" "}
          <Button type="link" path={PATHS.contactsAdd}>
            Criar um contato
          </Button>
        </Title>

        <div className={S.cardContainer}>
          {contacts.map((contact, index) => {
            return (
              <CardContact
                key={index}
                photo={contact.foto}
                name={contact.nome}
                tel={contact.telefones[0]?.numero || contact.email}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Contact };

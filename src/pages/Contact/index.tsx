import { Button, Input, Title } from "../../components";
import { CardContact } from "../../components/CardContact";
import { useContact } from "./useContact";
import S from "./style.module.css";

const Contact = () => {
  const { contacts, filterContact } = useContact();

  return (
    <>
      <div className={S.containerCards}>
        <Title>
          Contatos{" "}
          <Button type="link">
            Criar um contato
          </Button>
        </Title>

        <div className={S.cardContainer}>
        <Input type="text" onInput={filterContact} />
          {contacts.map((contact, index) => {

            return (
              <CardContact
                key={index}
                photo={contact.foto}
                name={contact.nome}
                tel={contact.telefones[0]?.numero || contact.email}
                email={contact.email} 
                id={contact.id!}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Contact };
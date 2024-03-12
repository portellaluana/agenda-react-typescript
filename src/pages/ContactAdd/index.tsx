import { FC } from "react";
import { Button, Input } from "../../components";
import { Title } from "../../components/Title";
import { useContactAdd } from "./useContactAdd";
import S from "./style.module.css";
import { PATHS } from "../../routes/paths";

const ContactAdd: FC = () => {
  const { handleOnSubmit } = useContactAdd();

  return (
    <div className={S.novoContato}>
      <div className={S.novoContatoContainer}>
        <div className={S.novoContatoContent}>
          <Title>Novo contato</Title>
          <form onSubmit={handleOnSubmit}>
            <Input
              type="text"
              name="nome"
              placeholder="Nome"
              required
              data-required
            />
            <Input
              type="text"
              name="email"
              placeholder="E-mail"
              required
              data-required
            />

            <Button path={PATHS.contacts}>Cadastrar</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { ContactAdd };

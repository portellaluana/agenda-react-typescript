import { FC, MouseEvent, ReactNode, useState } from "react";
import S from "./style.module.css";
import { TypeButton, TypeButtonEnum } from "./Button.d";
import { Link } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import { Input, Title, InputTel } from "..";
import { useContactAdd } from "../../pages/ContactAdd/useContactAdd";

interface ButtonProps {
  children: ReactNode;
  type?: TypeButton;
  path?: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, disabled, type, onClick } = props;
  const [open, setOpen] = useState<boolean>(false);
  const { handleOnSubmit } = useContactAdd();

  function openModal() {
    setOpen(!open);
  }
  function chamaFuncao() {
    setOpen(!open);
    onClick && onClick();
  }

  if (type === TypeButtonEnum.LINK) {
    return (
      <>
        <Link to={PATHS.contacts} className={S.buttonLink} onClick={chamaFuncao}>
          {children}
        </Link>
        {open ? (
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
 <select name="telefone1-tipo">
          <option value="casa">Casa</option>
          <option value="trabalho">Trabalho</option>
          <option value="celular">Celular</option>
        </select>

        <InputTel
          name="telefone1-numero"
          placeholder="Número do telefone"
          required
          data-required
        />
                  <Button path={PATHS.contacts} >Cadastrar</Button>
                    <span className={S.botaoFechar} onClick={openModal}>Fechar</span>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <>
      <button className={S.button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
};

export { Button };

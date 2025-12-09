import Text from "./components/text";
import Icon from "./components/icon";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import ClipboardtextIcon from "./assets/icons/clipboardtext.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/cards";
import Container from "./components/container";

export default function App() {
  return (
    <Container>
      <div className="grid gap-3">
        <div className="flex flex-col gap-2">
          <Text variant="body-md-bold" className="text-pink-base">
            Olá Mundo
          </Text>
          <Text className="text-green-base">Olá Mundo</Text>
          <Text variant="body-md-bold">Olá Mundo</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={ClipboardtextIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={XIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
        </div>

        <div>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Adicionar tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
        </div>

        <div>
          <Card size="md"> Olá Mundo </Card>
        </div>
      </div>
    </Container>
  );
}

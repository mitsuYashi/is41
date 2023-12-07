import {
  Center,
  PasswordInput,
  TextInput,
  Container,
  Button,
} from '@mantine/core';

type Props = {
  nameRef: React.MutableRefObject<HTMLInputElement | null>;
  passwordRef: React.MutableRefObject<HTMLInputElement | null>;
  handleClick: () => void;
};

export const InputForm = ({ nameRef, passwordRef, handleClick }: Props) => {
  return (
    <Container>
      <Center>
        <Container w={500}>
          <form>
            <TextInput
              label="Name"
              placeholder="Your name"
              w={'100%'}
              ref={nameRef}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              w={'100%'}
              ref={passwordRef}
            />
            <Button mt="lg" variant="light" color="blue" onClick={handleClick}>
              submit
            </Button>
          </form>
        </Container>
      </Center>
    </Container>
  );
};

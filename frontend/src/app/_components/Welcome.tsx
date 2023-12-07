'use client';
import { Title, Textarea, Container, Flex, Button } from '@mantine/core';
import { InputForm } from './InputForm';
import { useRef, useState } from 'react';
import axios from 'axios';

export function Welcome() {
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState('{}');

  const handleClick = () => {
    const res = axios
      .get(
        `http://localhost:8080/user?name=${nameRef.current?.value}&password=${passwordRef.current?.value}`,
      )
      .then((res) => {
        console.log(res.data);
        setData(JSON.stringify(res.data));
      });
  };

  return (
    <Container p={100}>
      <Title ta="center" mt={100}>
        Welcome to{' User Management System '}
      </Title>
      <Flex align="center">
        <Container mt={50}>
          <InputForm
            nameRef={nameRef}
            passwordRef={passwordRef}
            handleClick={handleClick}
          />

          <Textarea
            mt={50}
            label="response"
            description=""
            placeholder="Input placeholder"
            rows={4}
            minRows={4}
            readOnly
            value={data}
          />
        </Container>
      </Flex>
    </Container>
  );
}

import React from "react";

export const TypeComponent: React.FunctionComponent = () => {
  const [name, setName] = React.useState<string>("Antonio");

  const handleName = (name: string) => {
    setName(name);
  };

  return (
    <>
      <input
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleName(event.target.value)
        }
      />
      <span>Hola, bienvenido: {name}</span>
    </>
  );
};

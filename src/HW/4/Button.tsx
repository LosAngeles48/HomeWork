type ButtonPropsType = {
  callBack: () => void // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Button = ({callBack, name}: ButtonPropsType) => {
  const callbackHandler = () => callBack()

  return (
    <button id={'hw04-button'} onClick={callbackHandler}>
      {name}
    </button>
  );
};

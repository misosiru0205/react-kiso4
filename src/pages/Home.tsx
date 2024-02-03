import Header from "./Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export type Inputs = {
  name: string|undefined;
  age: number|undefined;
};

const Home: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ reValidateMode: "onSubmit", criteriaMode: "all" });

  const [response, setResponse] = useState<Inputs>({
    name: undefined,
    age: undefined,
  });
  const [boolean, setBoolean] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setResponse(data);
    setBoolean(true);
  };

  function formReset() {
    reset();
    setBoolean(false);
    setResponse({ name: undefined, age: undefined});
  }

  return (
    <>
      <Header name={response.name} age={response.age} />
      <main>
        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
          <label>
            名前{errors.name && errors.name.message}
            <br />
            <input
              type="text"
              {...register("name", {
                required: { value: true, message: " : 必須の項目です。" },
              })}
            />
          </label>
          <label>
            年齢{errors.age && errors.age.message}
            <br />
            <input
              type="text"
              {...register("age", {
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: " : 数字のみの入力をしてください",
                },
                required: { value: true, message: " : 必須の項目です。" },
              })}
            />
          </label>
          <input type="submit" value="送信" />
          <input type="button" value="リセット" onClick={() => formReset()} />
        </form>
        <br />
        {boolean ? (
          <div className="responseContainer">
            <h2 className="responseName">名前 : </h2>
            <p>{response.name}</p>
            <br />
            <h2 className="responseBirthday">年齢 : </h2>
            <p>{response.age}</p>
            <br />
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Home;

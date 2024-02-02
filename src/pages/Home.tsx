import Header from "./Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export type Inputs = {
  name: string;
  birthday: number;
  hobby: string;
  detail: string;
};

const Home: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ reValidateMode: "onSubmit", criteriaMode: "all" });

  const [response, setResponse] = useState<Inputs>({
    name: "",
    birthday: 0,
    hobby: "",
    detail: "",
  });
  const [boolean, setBoolean] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setResponse(data);
    setBoolean(true);
  };

  function formReset() {
    reset();
    setBoolean(false);
    setResponse({ name: "", birthday: 0, hobby: "", detail: "" });
  }

  return (
    <>
      <Header {...response} />
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
            生年月日{errors.birthday && errors.birthday.message}
            <br />
            <input
              type="text"
              {...register("birthday", {
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: " : 数字のみの入力をしてください",
                },
                required: { value: true, message: " : 必須の項目です。" },
              })}
            />
          </label>
          <label>
            趣味{errors.hobby && errors.hobby.message}
            <br />
            <input
              type="text"
              {...register("hobby", {
                required: { value: true, message: " : 必須の項目です。" },
              })}
            />
          </label>
          <label>
            詳細{errors.detail && errors.detail.message}
            <br />
            <input
              type="text"
              {...register("detail", {
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
            <h2 className="responseBirthday">生年月日 : </h2>
            <p>{response.birthday}</p>
            <br />
            <h2 className="responseHobby">趣味 : </h2>
            <p>{response.hobby}</p>
            <br />
            <h2 className="responseDetail">詳細 : </h2>
            <p>{response.detail}</p>
          </div>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Home;

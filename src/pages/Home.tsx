import Header from "./Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

//オブジェクトの型定義
export type Inputs = {
  name: string|undefined;
  age: number|undefined;
};

//functionならば:React.FCは不必要
const Home: React.FC = () => {

  //useFormに定義した型をあてる
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ reValidateMode: "onSubmit", criteriaMode: "all" });

  //useStateも同じくあてる
  const [response, setResponse] = useState<Inputs>({
    name: undefined,
    age: undefined,
  });

  //真偽値のステートを定義
  const [boolean, setBoolean] = useState<boolean>(false);

  //useFormから入力を受け取る場合
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setResponse(data);
    setBoolean(true);
  };

  //その他関数で返り値無しならvoid型 別に書かなくても問題はない
  function formReset():void {
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

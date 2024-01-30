import Header from "./Header"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"

export type Inputs = {
    name: string;
    birthday: number;
    hobby:string;
    detail:string;
};

const Home:React.FC = () =>{

    

    const {register,handleSubmit,reset,formState:{errors}} = useForm<Inputs>({reValidateMode:"onSubmit",criteriaMode:"all"})

    const [response,setResponse] =useState<Inputs>({name:"",birthday:0,hobby:"",detail:""})
    const [boolean,setBoolean] = useState<boolean>(false)

    const onSubmit:SubmitHandler<Inputs> = (data) =>{
        setResponse(data)
        setBoolean(true)
    }

    function formReset(){
        reset()
        setBoolean(false)
        setResponse({name:"",birthday:0,hobby:"",detail:""})
    }

    return(
        <>
        <Header {...response}/>
        <main>
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <label>名前{errors.name && errors.name.message}
                <br/>
                    <input type="text" {...register("name",{
                        required:{value:true,message:"必須の項目です。"}
                    })}/>
                </label>
                <label>生年月日
                <br/>
                    <input type="text" {...register("birthday",{
                        required:{value:true,message:"必須の項目です。"}
                    })}/>
                </label>
                <label>趣味
                <br/>
                    <input type="text" {...register("hobby",{
                        required:{value:true,message:"必須の項目です。"}
                    })}/>
                </label>
                <label>詳細
                <br/>
                    <input type="text" {...register("detail",{
                        required:{value:true,message:"必須の項目です。"}
                    })}/>
                </label>
                <input type="submit" value="送信"/>
                <input type="button" value="リセット" onClick={() => formReset()}/>
            </form>
            <br/>
            {boolean ?
            <div>
                <h1>名前</h1>
                <p>{response.name}</p>
                <h1>生年月日</h1>
                <p>{response.birthday}</p>
                <h1>趣味</h1>
                <p>{response.hobby}</p>
                <h1>詳細</h1>
                <p>{response.detail}</p>
            </div> 
            :
             <></>}
            
        </main>
        </>
    )
}

export default Home
import { useEffect, useState } from "react"
import { Inputs } from "./Home";
//Homeで定義した型をインポート

//Hreaderに定義した型をあて、propsを受け取る
const Header:React.FC<Inputs> = (props) =>{

    const [response,setResponse] = useState<Inputs>({ name: undefined, age: undefined})
  
    //propsが変わるたびに更新
    useEffect(()=>{
        setResponse(props)
    },[props])

    return(
        <header >
            <div className="header__container">
            <h1 className="header__title">入力テスト</h1>
            {response.name !== undefined && <p className="header__username">name : {response.name}</p>}
            {response.age !== undefined && <p className="header__age">age : {response.age}</p>}
            </div>
        </header>
    )
}

export default Header
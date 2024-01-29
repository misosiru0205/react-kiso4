import Header from "./Header"
//import { useState } from "react"


const Home:React.FC = () =>{

//useStateにはこれで
//const [username,setUsername] = useState<string>("a")

//変数への型指定
const name:string = "谷口 諄輔"
const hobby:string = "ゲーム、読書"
const birthday:{year:number,month:number,date:number} = {year:1999,month:2,date:5}
const detail:string = "特にない"


    return(
        <>
        <Header/>
        <main>
            <div className="profileContainer">
                <div className="profileContainer_Name">
                    <h3 className="profileContainer__Title">名前:</h3>
                    <p className="nameContainer__Name">{name}</p>
                </div>
                <div className="Container">
                    <h3 className="nameContainer__Title">生年月日:</h3>
                    <p className="nameContainer__Name">{birthday.year}年{birthday.month}月{birthday.date}日</p>
                </div>
                <div className="Container">
                    <h3 className="nameContainer__Title">趣味:</h3>
                    <p className="nameContainer__Name">{hobby}</p>
                </div>
                <br/>
                <div className="Container">
                    <h3 className="nameContainer__Title">ここ最近の出来事</h3>
                    <br/>
                    <p className="nameContainer__Name">{detail}</p>
                </div>
            </div>
            
        </main>
        </>
    )
}

export default Home
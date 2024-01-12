import style from "./Herosection.module.css";
import image from "../../assets/Heroimg.svg"
const Herosection = () => {
  return (
    <div className={style.main_box}>
        <div className={style.first_box}>
            <div>
                <h1>You dont have to fight them alone </h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            </div>
            <form className={style.input}>
                <input className={style.email} type="email" placeholder="Enter your email address"/>
                <button className={style.button} onClick={(e)=>e.preventDefault()}>Lets talk</button>
            </form>
        </div>
         <div className={style.img}>
        <img src={image} alt="person" />
        </div>
     </div>
  )
}

export default Herosection




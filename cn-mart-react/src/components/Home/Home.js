import { Link } from "react-router-dom";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.home}>
      <div>
        <h2>Located in Sheboygan, WI</h2>
        <p>
          Dolor ut quis consequat cupidatat. Culpa voluptate aliquip laboris
          sunt quis proident occaecat culpa consequat non laborum reprehenderit.
          Incididunt exercitation et magna reprehenderit magna aliqua ullamco
          voluptate enim adipisicing eiusmod. Nisi dolor adipisicing sit irure
          nisi ipsum duis dolore ut eu deserunt velit anim. Amet culpa mollit
          Lorem aliquip et ad ad commodo adipisicing officia eiusmod. Culpa
          cillum do irure occaecat exercitation occaecat deserunt labore est.
          Aute pariatur id nisi deserunt anim. Cillum labore ad est irure sint
          cillum et labore nostrud laboris excepteur dolore ut amet. Irure
          cupidatat esse qui ea. Cillum nostrud culpa quis Lorem fugiat ullamco
          excepteur sit. Cupidatat in sunt quis dolor cupidatat est enim laborum
          ex non aliqua non do occaecat. Sint sunt cupidatat ad irure. Pariatur
          est labore sunt sit ipsum do. Ad excepteur mollit irure laborum sunt
          ullamco laborum. Eiusmod id ut qui qui aute eu officia. Ullamco anim
          eu ad dolore laborum ea sunt veniam Lorem fugiat sunt eiusmod est.
        </p>
      </div>
      <div>
        <h2>We Sell</h2>
        <ul className={style.container}>
          <li>
            <Link to="store/chips">
              Chips
              <img src={require("../../images/chips.jpg")} alt="chips" />
            </Link>
          </li>
          <li>
            <Link to="store/noodles">
              Noodles
              <img src={require("../../images/noodles.jpg")} alt="noodles" />
            </Link>
          </li>
          <li>
            <Link to="store/drinks">
              Drinks
              <img src={require("../../images/drinks.jpg")} alt="drinks" />
            </Link>
          </li>
          <li>
            <Link to="store/candy">
              Candy
              <img src={require("../../images/candy.jpg")} alt="candy" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

import "./App.css";

const App = (): JSX.Element => {
  return (
    <div>
      <table id="calculadora">
        <tr>
          <td colSpan={4} id="operacion"></td>
        </tr>
        <tr>
          <td colSpan={4} id="resultado"></td>
        </tr>
        <tr>
          <td>
            <button className="gris" id="c">
              C
            </button>
          </td>
          <td>
            <button className="gris" id="sqrt">
              √
            </button>
          </td>
          <td>
            <button className="gris" id="div">
              ÷
            </button>
          </td>
          <td>
            <button className="gris" id="mult">
              ×
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button id="siete"> 7 </button>
          </td>
          <td>
            <button id="ocho"> 8 </button>
          </td>
          <td>
            <button id="nueve"> 9 </button>
          </td>
          <td>
            <button className="gris" id="resta">
              -
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button id="cuatro"> 4 </button>
          </td>
          <td>
            <button id="cinco"> 5 </button>
          </td>
          <td>
            <button id="seis"> 6 </button>
          </td>
          <td>
            <button className="gris" id="suma">
              +
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button id="uno"> 1 </button>
          </td>
          <td>
            <button id="dos"> 2 </button>
          </td>
          <td>
            <button id="tres"> 3 </button>
          </td>
          <td rowSpan={2}>
            <button className="gris" id="igual">
              =
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button id="coma"> . </button>
          </td>
          <td colSpan={4}>
            <button id="cero"> 0 </button>
          </td>
        </tr>
        <tr>
          <td colSpan={4} id="firma">
            Made with <span id="corazon">❤</span> by Sergi CM
          </td>
        </tr>
      </table>
    </div>
  );
};

export default App;

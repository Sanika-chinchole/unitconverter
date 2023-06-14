import React, { useState ,useEffect} from 'react';
import './UnitConverter1.css'

const UnitConverter = () => {
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  
    useEffect(() => {
      const selectElement = document.querySelector('.select-wrapper select');

      const handleChange = () => {
        const selectedOption = selectElement.options[selectElement.selectedIndex];
        selectedOption.style.color = 'white';
      };
      selectElement.addEventListener('change', handleChange);

    return () => {
      selectElement.removeEventListener('change', handleChange);
    };
  }, []);

  const handleFromUnitChange = (event) => {
    const selectedUnit = event.target.value;
    setFromUnit(selectedUnit);
    setOutputValue('');
  };

  const handleToUnitChange = (event) => {
    const selectedUnit = event.target.value;
    setToUnit(selectedUnit);
    setOutputValue('');
  };

  const handleInputChange = (event) => {
    const enteredValue = event.target.value;
    setInputValue(enteredValue);
    setOutputValue('');
  };

  const handleConvert = () => {
    const valueToConvert = parseFloat(inputValue);

    if (isNaN(valueToConvert)) {
      setOutputValue('Invalid input');
      return;
    }
  
    if (fromUnit === toUnit) {
      setOutputValue(`${valueToConvert} ${fromUnit} is equal to ${valueToConvert} ${toUnit}`);
      return;
    }
  
    let convertedValue;
  
    switch (fromUnit) {
      case 'Meter':
        switch (toUnit) {
          case 'Kilometer':
            convertedValue = valueToConvert / 1000;
            break;
          case 'Centimeter':
            convertedValue = valueToConvert * 100;
            break;
          case 'Millimeter':
            convertedValue = valueToConvert * 1000;
            break;
          case 'Micrometer':
            convertedValue = valueToConvert * 1000000;
            break;
          case 'Nanometer':
            convertedValue = valueToConvert * 1000000000;
            break;
          case 'Mile':
            convertedValue = valueToConvert * 0.000621371;
            break;
          case 'Yard':
            convertedValue = valueToConvert * 1.09361;
            break;
          case 'Foot':
            convertedValue = valueToConvert * 3.28084;
            break;
          case 'Inch':
            convertedValue = valueToConvert * 39.3701;
            break;
          case 'Light Year':
            convertedValue = valueToConvert / 9.461e+15;
            break;
          default:
            setOutputValue('Invalid unit');
            return;
        }
        break;
  
      case 'Kilometer':
        switch (toUnit) {
          case 'Meter':
            convertedValue = valueToConvert * 1000;
            break;
          case 'Centimeter':
            convertedValue = valueToConvert * 100000;
            break;
          case 'Millimeter':
            convertedValue = valueToConvert * 1000000;
            break;
          case 'Micrometer':
            convertedValue = valueToConvert * 1e+9;
            break;
          case 'Nanometer':
            convertedValue = valueToConvert * 1e+12;
            break;
          case 'Mile':
            convertedValue = valueToConvert * 0.621371;
            break;
          case 'Yard':
            convertedValue = valueToConvert * 1093.61;
            break;
          case 'Foot':
            convertedValue = valueToConvert * 3280.84;
            break;
          case 'Inch':
            convertedValue = valueToConvert * 39370.1;
            break;
          case 'Light Year':
            convertedValue = valueToConvert / 9.461e+12;
            break;
          default:
            setOutputValue('Invalid unit');
            return;
        }
        break;
  
      case 'Centimeter':
        switch (toUnit) {
          case 'Meter':
            convertedValue = valueToConvert / 100;
            break;
          case 'Kilometer':
            convertedValue = valueToConvert / 100000;
            break;
          case 'Millimeter':
            convertedValue = valueToConvert * 10;
            break;
          case 'Micrometer':
            convertedValue = valueToConvert * 10000;
            break;
          case 'Nanometer':
            convertedValue = valueToConvert * 10000000;
            break;
          case 'Mile':
            convertedValue = valueToConvert / 160934.4 / 100000;
            break;
          case 'Yard':
            convertedValue = valueToConvert / 91.44 / 100;
            break;
          case 'Foot':
            convertedValue = valueToConvert / 30.48 / 100;
            break;
          case 'Inch':
            convertedValue = valueToConvert / 2.54 / 100;
            break;
          case 'Light Year':
            convertedValue = valueToConvert / 9.461e+17 / 100000;
            break;
          default:
            setOutputValue('Invalid conversion');
            return;
        }
        break;

        case 'Millimeter':
      switch (toUnit) {
        case 'Meter':
          convertedValue = valueToConvert / 1000;
          break;
        case 'Kilometer':
          convertedValue = valueToConvert / 1000000;
          break;
        case 'Centimeter':
          convertedValue = valueToConvert / 10;
          break;
        case 'Micrometer':
          convertedValue = valueToConvert * 1000;
          break;
        case 'Nanometer':
          convertedValue = valueToConvert * 1000000;
          break;
        case 'Mile':
          convertedValue = valueToConvert / 1609344 / 1000;
          break;
        case 'Yard':
          convertedValue = valueToConvert / 914.4 / 1000;
          break;
        case 'Foot':
          convertedValue = valueToConvert / 304.8 / 1000;
          break;
        case 'Inch':
          convertedValue = valueToConvert / 25.4 / 1000;
          break;
        case 'Light Year':
          convertedValue = valueToConvert / 9.461e+18 / 1000000;
          break;
        default:
          setOutputValue('Invalid conversion');
          return;
      }
      break;

      case 'Micrometer':
      switch (toUnit) {
        case 'Meter':
          convertedValue = valueToConvert / 1e+6;
          break;
        case 'Kilometer':
          convertedValue = valueToConvert / 1e+9;
          break;
        case 'Centimeter':
          convertedValue = valueToConvert / 10000;
          break;
        case 'Millimeter':
          convertedValue = valueToConvert / 1000;
          break;
        case 'Nanometer':
          convertedValue = valueToConvert * 1000;
          break;
        case 'Mile':
          convertedValue = valueToConvert / 1.609e+9;
          break;
        case 'Yard':
          convertedValue = valueToConvert / 914400 / 10000;
          break;
        case 'Foot':
          convertedValue = valueToConvert / 304800 / 10000;
          break;
        case 'Inch':
          convertedValue = valueToConvert / 25400 / 10000;
          break;
        case 'Light Year':
          convertedValue = valueToConvert / 9.461e+21 / 1e+9;
          break;
        default:
          setOutputValue('Invalid conversion');
          return;
      }
      break;

      case 'Nanometer':
      switch (toUnit) {
        case 'Meter':
          convertedValue = valueToConvert / 1e+9;
          break;
        case 'Kilometer':
          convertedValue = valueToConvert / 1e+12;
          break;
        case 'Centimeter':
          convertedValue = valueToConvert / 1e+7;
          break;
        case 'Millimeter':
          convertedValue = valueToConvert / 1e+6;
          break;
        case 'Micrometer':
          convertedValue = valueToConvert / 1000;
          break;
        case 'Mile':
          convertedValue = valueToConvert / 1.609e+12;
          break;
        case 'Yard':
          convertedValue = valueToConvert / 9.144e+8 / 1e+7;
          break;
        case 'Foot':
          convertedValue = valueToConvert / 3.048e+8 / 1e+7;
          break;
        case 'Inch':
          convertedValue = valueToConvert / 2.54e+7 / 1e+7;
          break;
        case 'Light Year':
          convertedValue = valueToConvert / 9.461e+24 / 1e+12;
          break;
        default:
          setOutputValue('Invalid conversion');
          return;
      }
      break;

      case 'Mile':
      switch (toUnit) {
        case 'Meter':
          convertedValue = valueToConvert * 1609.34;
          break;
        case 'Kilometer':
          convertedValue = valueToConvert * 1.60934;
          break;
        case 'Centimeter':
          convertedValue = valueToConvert * 160934.4;
          break;
        case 'Millimeter':
          convertedValue = valueToConvert * 1.609e+6;
          break;
        case 'Micrometer':
          convertedValue = valueToConvert * 1.609e+9;
          break;
        case 'Nanometer':
          convertedValue = valueToConvert * 1.609e+12;
          break;
        case 'Yard':
          convertedValue = valueToConvert * 1760;
          break;
        case 'Foot':
          convertedValue = valueToConvert * 5280;
          break;
        case 'Inch':
          convertedValue = valueToConvert * 63360;
          break;
        case 'Light Year':
          convertedValue = valueToConvert / 5.879e+12 * 1.60934;
          break;
          default:
          setOutputValue('Invalid conversion');
          return;
      }
      break;

      case 'Yard':
        switch (toUnit) {
          case 'Meter':
            convertedValue = valueToConvert / 1.094;
            break;
          case 'Kilometer':
            convertedValue = valueToConvert / 1093.6133;
            break;
          case 'Centimeter':
            convertedValue = valueToConvert * 91.44;
            break;
          case 'Millimeter':
            convertedValue = valueToConvert * 914.4;
            break;
          case 'Micrometer':
            convertedValue = valueToConvert * 914400;
            break;
          case 'Nanometer':
            convertedValue = valueToConvert * 9.144e+8;
            break;
          case 'Foot':
            convertedValue = valueToConvert * 3;
            break;
          case 'Inch':
            convertedValue = valueToConvert * 36;
            break;
          case 'Mile':
          convertedValue = valueToConvert * 0.000568182;
          break;
          case 'Light Year':
            convertedValue = valueToConvert / 1.035e+18 * 0.0009144;
            break;
          default:
            setOutputValue('Invalid conversion');
            return;
        }
        break;

        case 'Foot':
      switch (toUnit) {
        case 'Meter':
          convertedValue = valueToConvert / 3.281;
          break;
        case 'Kilometer':
          convertedValue = valueToConvert / 3280.84;
          break;
        case 'Centimeter':
          convertedValue = valueToConvert * 30.48;
          break;
        case 'Millimeter':
          convertedValue = valueToConvert * 304.8;
          break;
        case 'Micrometer':
          convertedValue = valueToConvert * 304800;
          break;
        case 'Nanometer':
          convertedValue = valueToConvert * 3.048e+8;
          break;
        case 'Inch':
          convertedValue = valueToConvert * 12;
          break;
        case 'Light Year':
          convertedValue = valueToConvert / 3.104e+16 * 0.3048;
          break;
        case 'Yard':
            convertedValue = valueToConvert * 0.333333;
            break;
        case 'Mile':
            convertedValue = valueToConvert * 0.000189394;
            break;
        default:
          setOutputValue('Invalid conversion');
          return;
      }
      break;

      case 'Inch':
      switch (toUnit) {
        case 'Meter':
          convertedValue = valueToConvert / 39.37;
          break;
        case 'Kilometer':
          convertedValue = valueToConvert / 39370.079;
          break;
        case 'Centimeter':
          convertedValue = valueToConvert * 2.54;
          break;
        case 'Foot':
          convertedValue = valueToConvert * 0.0833333;
          break;
        case 'Yard':
            convertedValue = valueToConvert * 0.0277778;
            break;  
        case 'Mile':
              convertedValue = valueToConvert * 0.0000157828;
              break;    
        case 'Millimeter':
          convertedValue = valueToConvert * 25.4;
          break;
        case 'Micrometer':
          convertedValue = valueToConvert * 25400;
          break;
        case 'Nanometer':
          convertedValue = valueToConvert * 2.54e+7;
          break;
        case 'Light Year':
          convertedValue = valueToConvert / 3.104e+17 * 0.0254;
          break;
        default:
          setOutputValue('Invalid conversion');
          return;
      }
      break;

      case 'Light Year':
      switch (toUnit) {
        case 'Meter':
          convertedValue = valueToConvert * (9.461e+15);
          break;
        case 'Kilometer':
          convertedValue = valueToConvert * (9.461e+12);
          break;
        case 'Centimeter':
          convertedValue = valueToConvert * (9.461e+17);
          break;
        case 'Millimeter':
          convertedValue = valueToConvert * (9.461e+18);
          break;
        case 'Micrometer':
          convertedValue = valueToConvert * (9.461e+21);
          break;
        case 'Nanometer':
          convertedValue = valueToConvert * (9.461e+24);
          break;
        case 'Mile':
          convertedValue = valueToConvert * (5.879e+12);
          break;
        case 'Yard':
          convertedValue = valueToConvert * (1.057e+16);
          break;
        case 'Foot':
          convertedValue = valueToConvert * (3.153e+16);
          break;
        case 'Inch':
          convertedValue = valueToConvert * (3.784e+17);
          break;
        default:
          setOutputValue('Invalid conversion');
          return;
      }
      break;
  
      default:
        setOutputValue('Invalid Conversion');
        return;
    }
  
    if (convertedValue === undefined) {
      setOutputValue('Invalid conversion');
      return;
    }

    setOutputValue(`${valueToConvert} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}`);
  };

  return (
   <>
   <br/><br/><br/><br/><br/><br/><br/><br/><br/>
   <div className='converter-container'>
      <div style={{color:'white'}} className='select-wrapper'>
        <div  id='fromunit' >
          <label htmlFor="fromUnit" style={{fontSize:'18px'}}><u>From:</u> &nbsp;</label>
          <select id="fromUnit" value={fromUnit} onChange={handleFromUnitChange} className='btn btn dropdown-toggle dropdown-toggle-split e-round-corner border-info border-2'>
            <option value="" >Select unit</option>
            <option value="Meter">Meter</option>
            <option value="Kilometer">Kilometer</option>
            <option value="Centimeter">Centimeter</option>
            <option value="Millimeter">Millimeter</option>
            <option value="Micrometer">Micrometer</option>
            <option value="Nanometer">Nanometer</option>
            <option value="Mile">Mile</option>
            <option value="Yard">Yard</option>
            <option value="Foot">Foot</option>
            <option value="Inch">Inch</option>
            <option value="Light Year">Light Year</option>
          </select>
        </div><br/>
        <div>
          <label htmlFor="toUnit" style={{fontSize:'18px'}}><u>To:</u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <select id="toUnit" value={toUnit} onChange={handleToUnitChange}  className='btn btn dropdown-toggle dropdown-toggle-split e-round-corner border-info border-2'>
            <option value="">Select unit</option>
            <option value="Meter">Meter</option>
            <option value="Kilometer">Kilometer</option>
            <option value="Centimeter">Centimeter</option>
            <option value="Millimeter">Millimeter</option>
            <option value="Micrometer">Micrometer</option>
            <option value="Nanometer">Nanometer</option>
            <option value="Mile">Mile</option>
            <option value="Yard">Yard</option>
            <option value="Foot">Foot</option>
            <option value="Inch">Inch</option>
            <option value="Light Year">Light Year</option>
          </select>
        </div><br/>
      </div><br/>
      <div >
        <input style={{ border: '1px solid red', borderRadius:'5px', borderWidth:"3px", height:'37px' }} type="number" value={inputValue} onChange={handleInputChange} className='border-5 border-aqua-600 ...' />
        <button  onClick={handleConvert} className='btn btn-success'>Convert</button>
      </div>
      {outputValue && <p>{outputValue}</p>}
    </div>
    </>
  );
};

export default UnitConverter;
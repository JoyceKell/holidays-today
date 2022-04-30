import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import Message from "../Message";
import api from "../../services/api";
import "./styles.css";

export default function Form() {
  const [countries, setCountries] = useState([]);
  const [data, setData] = useState(new Date("2021-12-31"));
  const [selectedCountry, setSelectedCountry] = useState();
  const [holidays, setHolidays] = useState();
  const [showHolidays, setShowHolidays] = useState(false);

  useEffect(() => {
    async function loadCountries() {
      const result = await api.get("countries");
      setCountries(result.data.dataCountry);
      setSelectedCountry(result.data.dataCountry[0].code);
    }

    loadCountries();
  }, []);

  async function handleSubmit(e) {
    if (showHolidays) {
      setShowHolidays(false);
    }
    e.preventDefault();
    const result = await api.get(
      `holidays/${selectedCountry}/${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    );
    setHolidays(result.data.dataHolidays);
    setShowHolidays(true);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="select-country">
            <h1 htmlFor="countries">Is today a holiday?</h1>

            <h2>selecione uma data e um país para verificar se há feriados</h2>
            <select
              name="country"
              id="country"
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.country}
                </option>
              ))}
            </select>
            <DatePicker
              value={data}
              onChange={(date) => setData(date)}
              maxDate={new Date("2021-12-31")}
              minDate={new Date("2021-01-02")}
            />
            <button type="submit">confirmar</button>
          </div>
        </form>
        {showHolidays && <Message holidays={holidays} />}
      </div>
    </>
  );
}

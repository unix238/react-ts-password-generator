import React from "react";
import { useState, FC } from "react";
import "../styles/form.css";

export const Form: FC = () => {
  const [password, setPassword] = useState<string>(" ");
  const [length, setLength] = useState<number>(0);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);

  const generate_password = () => {
    let possible = "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) {
      possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      possible += "0123456789";
    }
    if (symbols) {
      possible += "!@#$%^&*()";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      password += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return password;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPassword(generate_password());
  };

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(e.target.valueAsNumber);
    setPassword(generate_password());
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="generated__password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="hAS0fb2!~jfB2jfa"
        />
        <div className="settings__password">
          <label htmlFor="length">Password Length</label>
          <div className="length">
            <input
              type="text"
              name="length"
              className="length__input input"
              value={length}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLength(e.target.valueAsNumber)
              }
            />
            <input
              type="range"
              name="length"
              className="input__range"
              value={length}
              onChange={handleRange}
            />
          </div>

          <div className="settings__input__fields">
            <div className="input__field">
              <input
                type="checkbox"
                className="input"
                id="num"
                checked={numbers}
                onChange={(e) => {
                  setNumbers(e.target.checked);
                }}
              />
              <label htmlFor="num">use numbers</label>
            </div>

            <div className="input__field">
              <input
                type="checkbox"
                className="input"
                id="uppercase"
                checked={uppercase}
                onChange={(e) => {
                  setUppercase(e.target.checked);
                }}
              />
              <label htmlFor="uppercase">use uppercase</label>
            </div>

            <div className="input__field">
              <input
                type="checkbox"
                className="input"
                id="symbol"
                checked={symbols}
                onChange={(e) => {
                  setSymbols(e.target.checked);
                }}
              />
              <label htmlFor="symbol">use symbols</label>
            </div>
          </div>
        </div>
        <div className="submit">
          <button className="btn">Generate</button>
        </div>
      </form>
    </div>
  );
};

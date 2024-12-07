import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent';
import imgLogo from '../../assets/imgAcuaterra.jpeg';
import '../../Styles/Styles.css';
import InputCustomComponent from '../../components/inputCustomComponent';

export default function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = formData;

      try {
        const response = await fetch('http://localhost:8080/api/v1/employee/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        if (response.status === 200) {
          setIsLoggedIn(true);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error:', error);
        // Manejar el error aquí (por ejemplo, mostrar un mensaje de error)
      }
    };

    const handleRegisterRedirect = () => {
      navigate('/register');
    };

    return (
      <div className="login-container">
        <h1>Inicio de Sesión</h1>
        <img src={imgLogo} alt="logo acuaTerra" />

        <h3>AcuaTerra</h3>

        <form onSubmit={handleSubmit}>
          <InputCustomComponent
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <InputCustomComponent
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          <ButtonComponent type="submit" text="Login" />
          <ButtonComponent onClick={handleRegisterRedirect} text="Ir al Registro" />
        </form>

        {isLoggedIn && (
          <div className="modal">
            <div className="modal-content">
              <h2>Bienvenido</h2>
            </div>
          </div>
        )}
      </div>
    );
}
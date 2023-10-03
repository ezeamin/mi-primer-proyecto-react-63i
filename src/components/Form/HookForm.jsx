import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const newContact = (data) => {
    console.log(data);
    reset()
  };

  return (
    <>
      <h1>Formulario con Hook Form</h1>
      <form onSubmit={handleSubmit(newContact)} noValidate>
        <fieldset>
          <label htmlFor="name-input" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="name-input"
            className={`form-control ${errors.nombre ? "is-invalid": ""}`}
            {...register("nombre", {
              required: "Este campo es requerido.",
              minLength: {
                value: 3,
                message: "Este campo tiene un mínimo de 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Este campo tiene un máximo de 20 caracteres",
              },
            })}
            required
          />
          <p className="text-danger">{errors.nombre?.message}</p>
        </fieldset>
        <fieldset className="mt-2">
          <label htmlFor="phone-input" className="form-label">
            DNI
          </label>
          <input
            type="number"
            id="phone-input"
            className={`form-control ${errors.dni ? "is-invalid": ""}`}
            {...register("dni", {
              required: "Este campo es requerido.",
              min: {
                value: 1000000,
                message: "El minimo aceptable es de 1000000",
              },
              max: {
                value: 99999999,
                message: "El máximo aceptable es de 99999999",
              }
            })}
          />
          <p className="text-danger">{errors.dni?.message}</p>
        </fieldset>
        <fieldset className="mt-2">
          <label htmlFor="email-input" className="form-label">
            Email
          </label>
          <input type="email" id="email-input" className={`form-control ${errors.email ? "is-invalid": ""}`} 
          {...register("email", {
            required: "Este campo es requerido.",
            pattern:{
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Debe ingresar un mail válido."
            }
          })}/>
          <p className="text-danger">{errors.email?.message}</p>
        </fieldset>
        <fieldset>
        <label htmlFor="sexo-input" className="form-label">
            Sexo
          </label>
          <select className={`form-select ${errors.sexo ? "is-invalid": ""}`} id="sexo-input" {...register("sexo",{
             required: "Este campo es requerido.",
          })}>
            <option value="">Elige una opcion</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="Otro">Otro</option>
            <option value="Prefiero no decir">Prefiero no decir</option>
          </select>
          <p className="text-danger">{errors.sexo?.message}</p>
        </fieldset>
        <button type="submit" className="btn btn-danger mt-3">
          Enviar
        </button>
      </form>
    </>
  );
};

export default HookForm;

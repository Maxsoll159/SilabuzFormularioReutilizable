import useForn from "../hooks/useForm";

export default function Register(){
  const [state, handleChange] = useForn({
    name: "",
    lastName: "",
    correo: "",
    edad: "",
  });

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(state)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Nombre</label>
        <input type="text" value={state.name} name="name" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Apelldio</label>
        <input type="text" value={state.lastName}  name="lastName"  onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">correo</label>
        <input type="text" value={state.correo} name="correo"   onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="">edada</label>
        <input type="text" value={state.edad}  name="edad" onChange={handleChange} />
      </div>
      <button>crear</button>
    </form>
  );
};

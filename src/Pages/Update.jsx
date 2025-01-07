import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate =e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const updateUser ={name, email, password};
      console.log(updateUser)
  }

  return (
    <div>
      <h2 className="text-center my-6 text-4xl font-bold">Update user Information of :{loadedUser.name}</h2>
      <div>
        <form onSubmit={handleUpdate} className="w-2/3 mx-auto">
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Name:
            <input type="text" name="name" defaultValue={loadedUser?.name} className="grow" placeholder="Daisy" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Email:
            <input type="email" name="email" defaultValue={loadedUser?.email} className="grow" placeholder="Daisy@gmail" />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Password:
            <input type="text" name="password" defaultValue={loadedUser?.password} className="grow" placeholder="1235667" />
          </label>
          <button type="submit" className="btn btn-primary btn-sm btn-wide">Update user</button>
        </form>
      </div>
    </div>
  );
};

export default Update;

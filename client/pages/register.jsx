import React, { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify"

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6 || !/\d/.test(newPassword)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one digit."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const {data} = await axios.post(`http://localhost:8000/api/register` , {
      name,
      lastname,
      email, 
      password,
    });
    setTimeout(() => {
      window.location.href = '/login';
    }, 5000);
    console.log("REGISTER RESPONSE" , data)
    toast.success("Registration successful. Please login to continue  ", {
      autoClose: 5000, 
    });
  }catch(err){
    toast(err.response.data)
  }
  };

  return (
    <div>
      <div  style={{backgroundColor:"#E8E8EA"}}>
        <div className="lg:grid lg:min-h-screen h-80vh lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-[90vh] xl:col-span-6">
            <img
              alt="regimg"
              src="/images/registerimg2.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-red-500 sm:text-3xl md:text-4xl " >
                Welcome to EduPrime
              </h2>

              <p className="mt-4 leading-relaxed text-blue-700 font-bold">
                Join our platform today and access a world of learning
                opportunities with just a few clicks
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-16 text-2xl font-bold text-red-500 sm:text-3xl md:text-4xl">
                  Welcome to EduPrime
                </h1>

                <p className="mt-4 leading-relaxed text-blue-700 font-semibold">
                  Join our platform today and access a world of learning
                  opportunities with just a few clicks
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                action="#"
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="eg. Rahul"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="eg. Singh"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eg. rahul3234@gmail.com"
                    required
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    onChange={handlePasswordChange}
                    placeholder=""
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                  )}
                </div>

                <div className="col-span-6">
                  <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about EduPrime events, product
                      updates and announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline">
                      {" "}
                      terms and conditions{" "}
                    </a>
                    and
                    <a href="#" className="text-gray-700 underline">
                      {" "}
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    disabled={password.length < 6 || !/\d/.test(password)}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="#" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Register;

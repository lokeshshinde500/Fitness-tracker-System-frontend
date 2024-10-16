import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Home() {
  const token = localStorage.getItem("token");
  const [programs, setPrograms] = useState([]);

  // fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fitness-tracker-system-backend.onrender.com/api/user/fitnessProgram",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPrograms(response.data.programs);
    } catch (error) {
      toast.error("Something Gone wrong!");
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* section fitness programs */}
      <section className="section-fitness-programs my-5">
        <div className="container mx-auto px-4">
          <div className="section-title py-10">
            <h2 className="text-3xl font-semibold text-blue-500 uppercase text-center">
              Fitness Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {programs.map((program) => (
              <div
                key={program._id}
                className="text-blue-500 rounded-lg p-4 shadow-lg border-blue-200 border-[1px] hover:bg-blue-100 transition"
              >
                <h2 className="text-lg font-bold">{program.name}</h2>
                <p className="mt-2">Description: {program.description}</p>
                <p className="mt-1">Duration: {program.duration}</p>
                <p className="mt-1">Price: ${program.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

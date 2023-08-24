import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fakeUrl = "https://jsonplaceholder.typicode.com/users";

const FakeData = () => {
  const result = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axios.get(fakeUrl);
      return data;
    },
  });
  const people = result.data;
  if (result.isError) {
    console.log("there was an error");
  }
  console.log(people);
  // return (
  //   // <section>
  //   //   {people.map((person) => {
  //   //     return (
  //   //       <div key={person.id}>
  //   //         <h1>{person.name}</h1>
  //   //         <p>{person.username}</p>
  //   //       </div>
  //   //     );
  //   //   })}
  //   // </section>
  // );
};

export default FakeData;

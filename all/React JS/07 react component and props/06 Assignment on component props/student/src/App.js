import StudentInfo from './component/StudentInfo'

function App() {

  const data = [
    {
      id:1001,
      name: "X",
      roll:1001,
      date: new Date(2020, 7, 14),
    },
    {
      id:1002,
      name: "Y",
      roll:1002,
      date: new Date(2021, 8, 12),
    },
    {
      id:1003,
      name: "Z",
      roll:1002,
      date: new Date(2022, 1, 14),
    },
    {
      id:1004,
      name: "T",
      roll:1004,
      date: new Date(2020, 9, 15),
    },

  ]


  
  return (
    <div className="App">
     <h2>Student attendence</h2>

     <StudentInfo 
       name={data[0].name}
       roll={data[0].roll}
       date={data[0].date}
     />

     <StudentInfo 
        name={data[1].name}
       roll={data[1].roll}
       date={data[1].date}
     />

     <StudentInfo 
        name={data[2].name}
       roll={data[2].roll}
       date={data[2].date}
     />

     <StudentInfo 
        name={data[3].name}
       roll={data[3].roll}
       date={data[3].date}
     />
    </div>
  );
}

export default App;
